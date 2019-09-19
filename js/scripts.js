function checkDayValidity() {
    console.log("Checking day");
    var inpObj = document.getElementById("day").value;
    console.log(inpObj);
    if (!parseInt(inpObj) && parseInt(inpObj) < 1 && parseInt(inpObj) > 31) {
        alert("Please input a number between 1 and 31");
        return undefined;
    }
    else {
        return parseInt(inpObj);
    }
}

function checkMonthValidity() {
    console.log("Checking Month");
    var inpObj = document.getElementById("month").value;
    console.log(inpObj);
    if (!parseInt(inpObj) && parseInt(inpObj) < 1 && parseInt(inpObj) > 12) {
        alert("Please input a number between 1 and 12");
        return undefined;
    }
    else {
        return parseInt(inpObj);
    }
}
function checkYearValidity() {
    var inpObj = document.getElementById("year").value;
    if (inpObj.length == 4 && parseInt(inpObj)) {
        return parseInt(inpObj);
    }
    else {
        alert("Please input the year of birth as ####");
        return undefined;
    }
}
function checkGenderValidity() {
    var inpObj = document.getElementById("gender").value;
    if (inpObj == "m" || inpObj == "f") {
        return inpObj
    }
    else { 
        alert("Please input m for male and f for female");

    }
}

function calculateAkanName() {
    console.log("Calculating Akan");
    var day = checkDayValidity();
    var month = checkMonthValidity();
    var year = checkYearValidity();
    var gender = checkGenderValidity();
    console.log("Day", day, "Month", month, "Year", year)
    if (day && month) {
        alert(day + month);
    }
}