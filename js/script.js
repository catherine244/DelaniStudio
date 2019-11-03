$(document).ready(function(){
  $("#design").click(function(){
    $("#design-text").show();
  });
  $("#design").click(function(){
    $("#design").hide();
  });
  $("#design-text").click(function(){
    $("#design").show();
  });
  $("#design-text").click(function(){
    $("#design-text").hide();
  });

  $("#development").click(function(){
    $("#development-text").show();
  });
  $("#development").click(function(){
    $("#development").hide();
  });
  $("#development-text").click(function(){
    $("#development").show();
  });
  $("#development-text").click(function(){
    $("#development-text").hide();
  });

  $("#management").click(function(){
    $("#management-text").show();
  });
  $("#management").click(function(){
    $("#management").hide();
  });
  $("#management-text").click(function(){
    $("#management").show();
  });
  $("#management-text").click(function(){
    $("#management-text").hide();
  });
});

$(document).ready(function(){
  var wrap = ['.port-image','.port-image1','.port-image2','.port-image3','.port-image4','.port-image5','.port-image6','.port-image7'];
   wrap.forEach(y => {
     var indexofwrap = wrap.indexOf(y);
     var overlay=['.portoverlay1','.portoverlay2','.portoverlay3','.portoverlay4','.portoverlay5','.portoverlay6','.portoverlay7','.portoverlay8'];
     $(y).mouseover(function() {
       $(overlay[indexofwrap]).show();
       }).mouseout(function() {
         $(overlay[indexofwrap]).hide();
     })
     })
//    $("#contact-us").submit(function() {
//     var nameInput = $("input#name").val();

//     var emailInput = $("input#email").val();
//     var messageInput = $("textarea#message").val();

//     alert(nameInput + " we have received your message. Thank you for reaching out to us.");

//   })
});
var key = '1c2089a31a00d28af6cb0e553ed84697-us20';
$("button").click(function(event) {
  event.preventDefault();
  var user = document.getElementById('username').value;
  alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
});
$("button").on('click', function(){
  $('form').each(function(){
    this.reset();
  });
});
