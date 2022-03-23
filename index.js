function createEmployeeRecord(employee){
    let employeeData = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
    }

    let timeEvent = {timeInEvents: [], timeOutEvents: []}
    console.log(employeeData, timeEvent)
        return [employeeData, timeEvent]
}

// function createEmployeeRecords(){

// }