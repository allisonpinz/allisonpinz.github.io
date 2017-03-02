$(document).ready(function() {

$("h1").hover(function(){
        $(this).css("color", "#445c18");
        }, function(){
    });

$("#part6").hover(function(){
        $(this).fadeOut("slow").delay(2000);
        }, function(){
    });

$("#part6").hover(function(){
        $(this).fadeIn("slow");
        }, function(){
    });

$(document).ready(function(){

    $('#sash').animate({top:'+=50px'},1000);
});

$(document).ready(function(){

    $('#age7').animate({top:'+=50px'},1000);
});

$(document).ready(function(){

    $('#wife').animate({top:'+=50px'},1000);
});

$(document).ready(function(){

    $('#suit').animate({top:'+=50px'},1000);
});

$(document).ready(function(){

    $('#yarn').animate({top:'+=50px'},1000);
});

/*
$("#part1").click(function() { 
  $("#part1").fadeOut("slow"); 
  });

  $("#part2").click(function() { 
     $("#part2").fadeIn("slow");
 });

 $("#part2").click(function() { 
  $("#part2").fadeOut("slow"); 
  });

  $("#part3").click(function() { 
     $("#part3").fadeIn("slow");
 });

 $("#part3").click(function() { 
  $("#part3").fadeOut("slow"); 
  });

  $("#part4").click(function() { 
     $("#part4").fadeIn("slow");
 });

 $("#part5").click(function() { 
  $("#part5").fadeOut("slow"); 
  });

  $("#part5").click(function() { 
  $("#part5").fadeOut("slow"); 
  });

  $("#part7").click(function() { 
     $("#part7").fadeIn("slow");
 });

 $("#part8").click(function() { 
  $("#part8").fadeOut("slow"); 
  });

  $("#part8").click(function() { 
  $("#part8").fadeOut("slow"); 
  });

  $("#part9").click(function() { 
     $("#part9").fadeIn("slow");
 });

 $("#part9").click(function() { 
  $("#part9").fadeOut("slow"); 
  });
*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

 });