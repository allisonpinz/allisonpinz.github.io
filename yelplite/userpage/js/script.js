$(document).ready(function() { //always do this first. A special event
  
$('#fav').mouseover(function(){
    $(this).css('black');
  });
  $('#pic1').mouseout(function(){
    $(this).css('background-color','#ff3151');
  });

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

});