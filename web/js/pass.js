define([
    "jquery",
    "slick"
  ], 
  function($) {
    "use strict";
  
      $(document).ready(function($){
        console.log('PASS Js Loaded') 
        // java loaded/
         
          // VAT Button
          $('.incvat').on('click', function(e){
            $('.price-container > span').toggle();
            //VAT Cookie to retain the toggle.
            $.cookie('incVat',$.cookie('incVat')!=1?1:0);
          });


      });
      return;
  });
