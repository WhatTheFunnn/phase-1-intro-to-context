function createEmployeeRecord(employeeArray){
    let employeeObject = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObject
}

function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(x => createEmployeeRecord(x))
}

function createTimeInEvent(employeeObject, dateStamp){
    let timeData = dateStamp.split(" ") 
    let date = timeData[0] 
    let hour = parseInt(timeData[1])
    let time = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    employeeObject.timeInEvents.push(time)
    return employeeObject
}

function createTimeOutEvent(employeeObject, dateStamp){
    let timeData = dateStamp.split(" ")
    let date = timeData[0]
    let hour = parseInt(timeData[1])
    let time = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    employeeObject.timeOutEvents.push(time)
    return employeeObject
}

function hoursWorkedOnDate(employeeObject, dateForm){
    let timeIn = employeeObject.timeInEvents`${hour}`
    //let hoursWorked = 
    
    // let timeOut = employeeObject.timeOutEvents
    console.log(timeIn)
    return createTimeInEvent
}