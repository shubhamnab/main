<script type="text/javascript" language="javascript">
$(document).ready(function() {
    //  $("#driver").click(function(event){
          $.getJSON('http://meerkat.buzz4healthtest.c66.me/api/v1/users/tushargupta.json', function(jd) {
             $('#name').html('<p> Name: ' + jd.user.name + '</p>');
             $('#name').append('<p>login : ' + jd.user.login+ '</p>');
             $('#name').append('<p> bio: ' + jd.user.bio+ '</p>');
             $("<img/>").attr("src", jd.user.avatar_url).appendTo("#name");
          });
   //   });
   });
   </script>