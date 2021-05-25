//async/await async 

const myFirstPromise = new Promise((resolve, reject)=> {
    const condition= true;
    if(condition){
        setTimeout(function(){
            resolve("promise is resolved"); //fulfilled
        },300);
    }else{
        reject('promise is rejected');
    }
        });

    myFirstPromise
    .then((successMsg) =>{
        console.log(successMsg);
    })
    .catch((errorMsg)=>{
        comsole.log(errorMsg);
    });

    const demoPromise= function(){
        myFirstPromise
        .then((successMsg)=> {
            console.log("success:" + successMsg);
        })
        .catch((errorMsg)=>{
            console.log("error:" + errorMsg);
        })
    }

    demoPromise()