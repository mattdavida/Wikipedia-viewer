//run jquery-3
$(document).ready(function() {
  

  $("#search").click(function() {

    /*SearchTerm will get search input.  The .val() method is primarily used to get
     the values of form elements such as input, select and textarea. When called on
     an empty collection, it returns undefined. */

    var searchTerm = $("#search-term").val();
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type:"GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {

        /* get link console.log(data[3][0]);
        get data console.log(data[2][0]);
        get heading console.log(data[1][0]); */
        $("#output").html("");
        for(var i=0; i<data[1].length; i++){
        $("#output").prepend("<li><a href= " + data[3][i]+">"+ data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
      }
      },
      error: function(error) {
        alert("error");
      },


    })


  });

});
