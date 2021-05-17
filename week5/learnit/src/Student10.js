import { default as Person } from "./Person"

class Student extends Person( ){

   constructor( ){

        super( )
         console.log( "Constructing Student ")
    }

    hello ( ) {
             console.log( "Hi I am a student a specialized person")

    }

}

export default Student


import { default as Student } from "./Student10"

let student = new Student( )

//Question: What are the values in the Console tab in the Developer tools window?

console.log( student.hello( ))

