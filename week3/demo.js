// const starwars_data = require ('./data.json');
// const items = starwars_data.length;
//console.log(JSON.stringify(starwars_data));



// for (var i= 0; i < starwars_data.length; i++) {
//     //starwars_data.innerHTML += starwars_data[i].name
//     console.log(starwars_data[i].name)

//     starwars_data.innerHTML += "<li>" + starwars_data[i].name + "</li>"
var starwars_data = [

    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/6/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/7/"
        ],
        "species": [
            "https://swapi.dev/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [
            "http://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "http://swapi.dev/api/people/2/"
    },
    {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male",
        "homeworld": "http://swapi.dev/api/planets/20/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "http://swapi.dev/api/vehicles/38/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/48/",
            "http://swapi.dev/api/starships/59/",
            "http://swapi.dev/api/starships/64/",
            "http://swapi.dev/api/starships/65/",
            "http://swapi.dev/api/starships/74/"
        ],
        "created": "2014-12-10T16:16:29.192000Z",
        "edited": "2014-12-20T21:17:50.325000Z",
        "url": "http://swapi.dev/api/people/10/"
    }

]
 

//  var getData = function(index = 2){
//      return starwars_data[index]
//  }

//  var result = getData(2);
//  console.log(JSON.stringify(result));



//  var getData = function( index){
//     return starwars_data[index];
// }

// var printProps = function(...props){
//     props.forEach(element => {
//         console.log(element);
//     });
    //console.log(prop1);
    //console.log(prop2);
    // console.log(prop3);
// }
// var result = getData(0);


// var name = result.name;
// var height = result.height;
// var mass = result.mass;
// var haircolor = result.hair_color;
// printProps(name, height, mass, haircolor);

  document.getElementById("button").addEventListener("click", e => {
 e.preventDefault()
 console.log("onClick")
 alert(starwars_data[0].name);
 var getData = function( index = 0){
    return starwars_data[index];
}
});

document.getElementById("peopleID").addEventListener("click", e=> {
    e.preventDefault()
        console.log("onclick");
        function peopleID(keyCode) {
            if (keyCode == 0) {
                
                alert(starwars_data[0].name);
            } else if (keyCode == 1) {
                
                alert(starwars_data[1].name);
            }else if (keyCode == 2) {
               
                alert(starwars_data[2].name);
            }
        }
});
        // }else if(starwars_data = 1){
        //     alert(starwars_data[1].name)
        // } else if(starwars_data = 2){
        //     alert(starwars_data[2].name)
        // }
        
        
        // } else if(result.index === 1){
        //     alert(starwars_data[index]);
        // } else if(result.index === 2){
        //     alert(starwars_data[index])
        // }



// var getData = function( index){
//     return starwars_data[index];
// }

// var printProps = function(obj, props){
//     console.log(obj);
//     props.forEach(element => {
//         console.log(`${element}= ${obj[element]}`) ;
//     });

// }
// var result0 = getData(0);

// const keys = Object.keys(result);
// printProps(result, keys);
// console.log(JSON.stringify(result));

// const map = new Map(Object.entries(result))

// var getData = function( index){
//     return starwars_data[index];
// }

// var printProps = function(obj, props){
//     console.log(obj);
//     props.forEach(element => {
//         console.log(`${obj[element]}`) ;
//     });

// }
// var result0 = getData(0);
// objectWithAddedProps = {...result0, "class":"FSW113", "type": "demo", "session":"668"};

// var keys = Object.keys(objectWithAddedProps);
// printProps(objectWithAddedProps, keys);
