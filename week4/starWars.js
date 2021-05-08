var starWarsPeopleList = document.querySelector('ul');
fetch('https://swapi.dev/api/people/')
.then(function(response) { 
    return response.json();
})
.then(function(json) {
    let people = json.results; 
    for(p of people) {
        let listItem = document.createElement('li'); 
        listItem.innerHTML = `<p>${p.name}</p>`; 
        starWarsPeopleList.appendChild(listItem);  
      }
   
  });

  var StarWarsData = document.querySelector('ul');
  fetch('https://swapi.dev/api/people/')
  .then(function(response) { 
      return response.json();
  })
  .then(function(json) {
      let people = json.results; 
      for(p of people) {
          let listItem = document.createElement('li'); 
          listItem.innerHTML = `<p1>${p.height}</p1>`; 
          starWarsPeopleList.appendChild(listItem);  
        }
     
    });

    var StarWarsData = document.querySelector('ul');
  fetch('https://swapi.dev/api/people/')
  .then(function(response) { 
      return response.json();
  })
  .then(function(json) {
      let people = json.results; 
      for(p of people) {
          let listItem = document.createElement('li'); 
          listItem.innerHTML = `<p2>${p.films}</p2>`; 
          starWarsPeopleList.appendChild(listItem);  
        }
     
    });

    function myFunction() {
        result = `${p.name}` + `${p.height}` + `${p.films}`
        alert(result)
    }