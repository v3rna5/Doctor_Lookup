// $$((documentdocument).).readyready((functionfunction()()  {{
//   $   $(('#weatherLocation''#weatherLocation').).clickclick((functionfunction()()  {{
//          letlet city  city == $ $(('#location''#location').).valval();();
//     $     $(('#location''#location').).valval((""""););
//     $     $..ajaxajax({({
//       url       url::  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15ba2d5104d0b23623c73a2a8d79d8da``http://api.openweat ,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.")
//       }
//     });
//   });
// });
