// var StarWarsData = document.querySelector('ul');
// fetch('https://swapi.dev/api/people/')
// .then(function(response) { 
//     return response.json();
// })
// .then(function(json) {
//     let people = json.results; 
//     for(p of people) {
//         let listItem = document.createElement('li'); 
//         listItem.innerHTML = `<p2>${p.films}</p2>`; 
//         starWarsPeopleList.appendChild(listItem);  
//       }
   
//   });

//   function myFunction() {
//       result = `${p.name}` + `${p.height}` + `${p.films}`
//       alert(result)
//   }

//   var hrtResult =function()

$(document).ready(function() {
  
  "use strict";
  var resultList = $("#resultList");
  resultList.text("... Result");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function() {
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide");
  });

  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size", "18px");

  $("#starWarApiSearchForm").on("submit", function() {
    debugger
    var peopleId = $("#peopleId").val();

    if (peopleId) {

      resultList.text("Performing search...");

      var starWarApiSearch = "https://swapi.dev/api/people/" + peopleId;
      
      $.get(starWarApiSearch)
        .success(function(r) {
          displayResults(r);
        })
        .fail(function(err) {
          console.log("Failed to query Star war API");
        })
        .done(function() {
          //
        });
    }

    return false;
  });

  function displayResults(results) {
   
    resultList.text(JSON.stringify(results));


  }

});
