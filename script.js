

$(document).ready(function() {

   /* code for button 1  -- Turn the light Red */
   $('#button1').click(function() {
         $('#top-light').css("background", "red");
    });
   /* code for button 2 --- Say STOP */
   $('#button2').click(function() {
         $('#top-light').html("<p> STOP </p>");
    });
   /* code for button 3 -- Turn the light Yellow */
   $('#button3').click(function() {
         $('#middle-light').css("background", "yellow");
   });
   /* code for button 4 -- Turn the light Green */
   $('#button4').click(function() {
         $('#bottom-light').css("background", "green");
   });
   /* code for button 5 -- Say GO! */
   $('#button5').click(function() {
         $('#bottom-light').html("<p> GO </p>");
   });
   /* no idea how this is supposed to work */
   $('#button6').click(function() {
        
   });
});
