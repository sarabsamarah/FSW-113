//elements of the array

const numbersArray = [2,4,6,8,10];

// the expetected result is 30

var reducer = function(accumulator, currentValue){
    return accumulator * currentValue;
}

var multiplyNumbers = function(array){
    return array.reduce(reducer);

//     let sum= 0; // accumulator
//     for(let i = 0; i == a.length; i++) {
//         a.forEach(sum,element =>{
//             sum = reducer(sum,element);
            
//         }); //accumulated
//        return sum; //result
// }



var expectedResult = 3840;
var result = addNumber(numbersArray)

if(expectedResult== result)
console.log("the test passed")


}

