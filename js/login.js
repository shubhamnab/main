jQuery(function(cash) {
  $( "#login_btn" ).click(function() {
   var x = document.getElementById("email").value;
   var y = document.getElementById("password").value;
      console.log(x);
      console.log(y);
 $.ajax({
     url: "http://meerkat.buzz4healthtest.c66.me/api/v1/sessions.json",
     type: 'POST',
     data: JSON.stringify({ user:{ email: x, password: y}}),
     contentType: 'application/json',
     dataType: 'json',
     cache: false,
     crossDomain: true,
     async: false,
     success : function(data) {
  //alert(1);
    window.location = "profile.html";
     },
     error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
  });
  });
});