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

function createTimeInEvent(timeInEvents, dateStamp){
    let timeData = dateStamp.split(" ") 
    timeInEvents.push(timeData) 
    console.log(timeInEvents)
    return timeInEvents
}