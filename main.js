//Attraverso una chiamata ajax all’Api di boolean
// avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// https://flynn.boolean.careers/exercises/api/array/music


$(document).ready(function() {

  var dischiBoolean = "https://flynn.boolean.careers/exercises/api/array/music";

  // Variabili handlebars
  var source   = document.getElementById("template").innerHTML;
  var template = Handlebars.compile(source);
  var contenuto = [];

  $.ajax(
   {
      url    : dischiBoolean,
      method : "GET",
      success: function(data){
        // Memorizzo tutti i dischi
        var dischi = data.response;
        // Inserisco nell'array i dischi
        contenuto.push(dischi)
      },
      error: function(){
        alert('Problemi di server');
      }
    }
  );



















});
