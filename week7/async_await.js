const fetch = require("node-fetch")

const URL = `https://swapi.dev/api`
const peopleEndPoint = `${URL}/people`


let peopleData= []
const getData = async function(id){
    const idEndpoint = `${peopleEndPoint}/${id}`
    const response= await fetch(idEndpoint)
    const data= await response.json()
    fetch(idEndpoint)
    // .then(response => response.json)
    // .then(data => {
        // console.log("${id} ========>>>>>>>>>")
        peopleData= {...peopleData, [id]:data}
}

var ids= [2,3,6,10,20, 30, 300]
var result = []
ids.forEach(id=>{
    
    //console.log(id)
    result.push(getData(id))
})

var output = Promise.all(result).then(response=>{
    console.log(peopleData);
})
