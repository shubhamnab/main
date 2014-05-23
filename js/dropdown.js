//console.log("hello");
(function() {
   // console.log("hello");
  var speclizationAPI = "http://meerkat.buzz4healthtest.c66.me/specializations";
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
        $("#foo").html(listItems);
        $("#foo").multiselect();
       // $('#foo').multiselect({
         //    includeSelectAllOption: true
//});
    });
})();