var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
    studentName,
    dob,
    age : function( ) {
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}

var result = studentInfo.age()

//Question: What is the value shown up in the console for the following statements?

console.log(studentInfo, result)