const URL =  "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&prop=extracts%7Cpageimages|pageterms&formatversion=2&exsentences=3&exintro=3&explaintext=3&piprop=thumbnail&pithumbsize=300&search=" 

$(document).ready(function() {
  
  $("#submit").click(function() { 
    var searchParams = $("#search").val()
    $.getJSON(URL + searchParams, function(json) {
        // var html = " ",
          var link= " ";
          // image;
        for (var i = 0; i < json[2].length; i++) {
          //  html += JSON.stringify(json[2][i] + "<br>");
          link += "<a class='list-group-item' href =" + JSON.stringify(json[3][i]) + " target = 'content'>" + JSON.stringify(json[1][i]) +"</a>";
          // link = link to each wiki article found in array[3].
          // image = image link found in image property supplied by wiki. action=opensearch does not support image property, but action=query does. find a way to make it work, second API request could be necessary. 
          // $(".articles").html(html);
          $("#link").html(link);
        }
      })
  });
});