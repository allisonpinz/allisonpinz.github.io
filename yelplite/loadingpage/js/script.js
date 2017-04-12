$(document).ready(function() { //always do this first. A special event
  
$('#fav').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('#pic1').mouseout(function(){
    $(this).css('background-color','#ff3151');
  });
});