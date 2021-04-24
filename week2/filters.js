let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]

let car= {
    
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}
 cars.unshift(car);
 console.log(cars)
 console.log("------------------");

 let myCars= [
 {
        "color": "red",
        "type": "hatchback",
        "registration": new Date('2016-06-09'),
        "capacity": 4
    
},
{
// cars.push(car2)
// console.log(cars)
// console.log("------------------");

//      let car3= {
        "color": "silver",
        "type": "2 door coupe",
         "registration": new Date('2021-30-3'),
         "capacity": 2
        },

    //     cars.push(car3)
    //     console.log(cars)
    //     console.log("------------------");
    // let car4= 
    {
         "color": "black",
         "type": "SUV",
         "registration": new Date('2021-11-02'),
         "capacity": 7
            
    },
    {
         "color": "red",
        "type": "hotrod",
        "registration": new Date('2006-10-12'),
        "capacity": 2
                
    },
     {
        "color": "green",
        "type": "dragster",
        "registration": new Date('2022-03-08'),
        "capacity": 1
                    
    },
    {
        "color": "yellow",
        "type": "camero",
        "registration": new Date('2021-12-12'),
        "capacity": 5
                        
    },
    {
         "color": "cream",
         "type": "Bentley",
         "registration": new Date('2022-11-11'),
         "capacity": 6
                            
}
 ]


console.log("------------------");

let carsList = cars.concat(car, myCars);
console.log(carsList);

console.log("------------------");

let redCars = carsList.filter(car => car.color === "red");
console.log(redCars);
console.log("------------------");

let redGreen = carsList.filter(car => car.color === "green" || car.color == "red");
console.log(redGreen);

console.log("------------------");

