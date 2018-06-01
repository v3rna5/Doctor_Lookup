import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// This code depends on jQuery Core and Handlebars.js

// var api_key = 'eb9389634f498c11ee1da4801a3486c1'; // Get your API key at developer.betterdoctor.com
// var doctor_uid = '333d4bb6fcf640e18e93b11b00fe09eb'
// var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors/'+ doctor_uid + '?user_key=' + api_key;
//
// $.get(resource_url, function (data) {
//     // data: { meta: {<metadata>}, data: {<Doctor>} }
//     var template = Handlebars.compile(document.getElementById('doc-template').innerHTML);
//     document.getElementById('content-placeholder').innerHTML = template(data);
// });


// This code depends on jQuery Core and Handlebars.js

var api_key = 'eb9389634f498c11ee1da4801a3486c1'; // Get your API key at developer.betterdoctor.com
var resource_url = 'https://api.betterdoctor.com/2016-03-01/specialties?skip=0&limit=20&user_key=' + api_key;
$.get(resource_url, function (data) {
    // data: { meta: {<metadata>}, data: {<array[Specialty]>} }
    var template = Handlebars.compile(document.getElementById('specialties-template').innerHTML);
    document.getElementById('content-placeholder').innerHTML = template(data);
});
