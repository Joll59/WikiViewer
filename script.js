const URL =  "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&prop=extracts%7Cpageimages|pageterms&formatversion=2&exsentences=3&exintro=3&explaintext=3&piprop=thumbnail&pithumbsize=300&search=";

var hidelist = function () {
    $('#iframe').removeClass("hidden");
    $("#link").addClass("hidden");
};

var hideframe = function () {
    $('#link').removeClass("hidden");
    $('#iframe').addClass("hidden");
};

// function showthenhide(element1, element2) {
//     $(element1).removeClass("hidden");
//     $(element2).addClass("hidden");
// } not working as expected....why? research! suspect line 28 is not behaving in the right manner!!

$(document).ready(function() {

  $("#submit").click(function() {
    var searchParams = $("#search").val();
    $.getJSON(URL + searchParams, function(json) {
          var link= " ";
        for (var i = 0; i < json[2].length; i++) {
          link += `<a class='list-group-item' id = ${i} href =` + JSON.stringify(json[3][i]) + "target='content'>" + JSON.stringify(json[1][i]).replace(/['"]+/g, '') +"</a>";
            $("#link").html(link);
                hideframe();
                $("#content").on('load', hidelist);
        }
      })
  });
});



// var html = " ",
// image;
//  html += JSON.stringify(json[2][i] + "<br>");
// link = link to each wiki article found in array[3].
// image = image link found in image property supplied by wiki. action=opensearch does not support image property, but action=query does. find a way to make it work, second API request could be necessary.
// $(".articles").html(html);
