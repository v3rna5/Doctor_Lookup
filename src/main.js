import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { DoctorLookup } from "../src/doctor-lookup.js";

$(document).ready(function() {
    $("#lookup").click(function() {
      let query = $("#query").val();
      $("#query").val("");
      $("#results").html("");

      if ( (query !="" && query!=null) && (query !="" || query!=null) )  {
        let myDoctor = new DoctorLookup();
        let answers = myDoctor.getAnswers(query, displayResult, displayError);
      }
  });

  
