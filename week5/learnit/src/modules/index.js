// import { Course, Session } from "./module1" // .js ext is not required
// console.log( "From Module 1", Course)
// console.log( "From Module 1", Session)

// import { Course as CourseId, Session } from "./module2" // .js ext is not required
// console.log( "From Module 2", CourseId)
// console.log( "From Module 2", Session)

// import { Course as CourseId , Session } from "./module3" // .js ext is not required
// console.log( "From Module 3", CourseId)
// console.log( "From Module 3", Session)


// import { Course as CourseId , Session } from "./module4" // .js ext is not required
// console.log("Load index.js.... Start")


// console.log( "From Module 4", CourseId)
// console.log( "From Module 4", Session)

// import Course  from "./module5" // .js ext is not required
// console.log( "From Module 5", Course)

// console.log("Load index.js.... End")

// import { default as Course}  from "./module6" // .js ext is not required
// console.log( "From Module 6", Course)

// import { default as Course}  from "./module7" // .js ext is not required
// console.log( "From Module 7", Course)

// import { default as Course, liveSession as Session}  from "./module8" // .js ext is not required
// console.log( "From Module 8", Course)
// console.log( "From Module 8", Session)

// import *  as mod from "./module9" // .js ext is not required
// console.log( "From Module 9", mod.courseName)
// console.log( "From Module 9", mod.liveSession) 

// import { default as Course, liveSession as Session}  from "./module10" // .js ext is not required
// console.log( "From Module 10", Course)
// console.log( "From Module 10", Session)

// import *  as mod from "./module11" // .js ext is not required

// mod.courseName = "FSW220"
// mod.liveSession = "Spring2020"

// console.log( "From Module 11", mod.courseName)
// console.log( "From Module 12", mod.liveSession)

import *  as mod from "./module11" // .js ext is not required

 

mod.courseName = "FSW113"
mod.liveSession = "Spring2020"

console.log( "From Module 12", mod.courseName)
console.log( "From Module 12", mod.liveSession)

console.log( "From Module 12", mod.combine( ))


