//console.log("hello");
(function() {
   // console.log("hello");
  var speclizationAPI = "http://meerkat.buzz4healthtest.c66.me/questions/tags";
  $.getJSON( speclizationAPI, {
    format: "json"
  })
    .done(function( data ) {
        //console.log("hello1");
         var listItems= "";
      $.each( data, function( i, item ) {
          //console.log(item.name);
     //    for(var k in item) {
   //console.log(k, item[k]);
//}
          
          
           listItems+= "<option value='" + item.name + "'>" + item.name + "</option>";
          
        if ( i === data.length-1) {
          return false;
        }
      });
        $("#foo1").html(listItems);
        $("#foo1").multiselect1();
       // $('#foo').multiselect({
         //    includeSelectAllOption: true
//});
    });
})();