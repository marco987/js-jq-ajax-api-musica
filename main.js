//Attraverso una chiamata ajax all’Api di boolean
// avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// https://flynn.boolean.careers/exercises/api/array/music


$(document).ready(function() {

  var dischiBoolean = "https://flynn.boolean.careers/exercises/api/array/music";

  $.ajax(
   {
      url    : dischiBoolean,
      method : "GET",
      // "Success", risposta positiva del server
      success: function(data){
        // "Success", risposta positiva dell'API
        if (data.success) {
          // Memorizzo tutti i dischi
          var dischi = data.response;
          console.log(dischi);

          for (var i = 0; i < dischi.length; i++) {
            // Memorizzo il singolo disco
            var disco = dischi[i];
            console.log(disco);

            var source   = $("#template").html();
            var template = Handlebars.compile(source);
            var context = {
              poster: disco.poster,
              title: disco.title,
              author: disco.author,
              year: disco.year
            };
            var html    = template(context);

            $(".cds-container").append(html);
          }
        }
      },
      error: function(){
        alert('Problemi di server');
      }
    }
  );

});
