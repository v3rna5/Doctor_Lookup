import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


import { BetterDoctor } from './doctor-lookup.js';

$(document).ready(function() {
  $('#buttonSub').click(function() {

    let Name = $("#doctor").val();
    let Condition = $('#symptom').val();
    $('#doctor').val('');
    $('#symptom').val('');
    let DoctorApi = new BetterDoctor();
    let DoctorData = DoctorApi.doctorCall(Name, Condition);
    $('.clear').remove();

    DoctorData.then(function(response) {
      let body = JSON.parse(response);
      let bodyData = body.data;
      let noResult = ("No results found.");

      if ( bodyData.length < 1) {
        $('.card').append(noResult);
        $('#doctorInfo').show();
      } else {
        $.each(body.data, function(i, data){
          let firstName = data.profile.first_name;
          let lastName = data.profile.last_name;
          let phone = data.practices[0].phones[0].number;
          let city = data.practices[0].visit_address.city;
          let state = data.practices[0].visit_address.state;
          let street = data.practices[0].visit_address.street;
          let zip = data.practices[0].visit_address.zip;
          let address = (street + '<br>' + city + ', ' + state + ', ' + zip);
          let newP = data.practices[0].accepts_new_patients;

          $('.card').append('<span class=\'clear\'><table><th>' + '<span class=\'names\'>' + firstName + ' ' + lastName + '</span>' + '<br>' + address + '<br>' + phone + '<br>'  + 'Accepting new patients: ' + newP + '<br>' + '<p></th><td>'  + '</td></table></span>');
          $('#doctorInfo').show();
        },
        function(error){
          $('.errors').text(`There was an error processing your request: ${error.message}`);
          $('#doctorInfo').show();
        });
      }
    });
  });
});
