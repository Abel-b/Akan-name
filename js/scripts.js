function checkDayValidity() {
    console.log("Checking day");
    var inpObj = document.getElementById("day").value;
    console.log(inpObj);
    if (!parseInt(inpObj) || parseInt(inpObj) < 1 || parseInt(inpObj) > 31) {
      alert("Please input a number between 1 and 31 for day");
      return undefined;
    } else {
      return parseInt(inpObj);
    }
  }
  function checkMonthValidity() {
    console.log("Checking Month");
    var inpObj = document.getElementById("month").value;
    console.log(inpObj);
    if (!parseInt(inpObj) || parseInt(inpObj) < 1 || parseInt(inpObj) > 12) {
      alert("Please input a number between 1 and 12 for month");
      return undefined;
    } else {
      return parseInt(inpObj);
    }
  }
  function checkYearValidity() {
    var inpObj = document.getElementById("year").value;
    if (inpObj && inpObj.length == 4) {
      return parseInt(inpObj);
    } else {
      alert("Please input a four digit number for year");
      return undefined;
    }
  }
  function checkGenderValidity() {
    var inpObj = document.getElementById("gender").value;
    if (inpObj == "m" || inpObj == "f") {
      return inpObj;
    } else {
      alert("Please input m or f for gender");
      return undefined;
    }
  }
  function calculateAkanName() {
    document.getElementById("result").innerText = "";
    console.log("Calculating Akan");
    var day = checkDayValidity();
    if (!day) {
      console.log("day is invalid");
      return;
    }
    var month = checkMonthValidity();
    if (!month) {
      console.log("month is invalid");
      return;
    }
    var year = checkYearValidity();
  if (!year) {
    console.log("year is invalid");
    return;
  }
  var gender = checkGenderValidity();
  if (!gender) {
    console.log("gender is invalid");
    return;
  }
  console.log("Day", day, "Month", month, "Year", year, "Gender", gender);

  var cc = Math.floor(year / 100);
  var yy = year % 100;
  var names = {
    m: {
      0: "Kwasi",
      1: "Kwadwo",
      2: "Kwabena",
      3: "Kwaku",
      4: "Yao",
      5: "Kofi",
      6: "Kwamena"
    },
    f: {
      0: "Akosua",
      1: "Adwoa",
      2: "Abena",
      3: "Akua",
      4: "Yaa",
      5: "Afua",
      6: "Amma"
    }
  };
  var dayOfWeek =((Math.floor(cc / 4) - (2 * cc) - 1) + (Math.floor(5 * yy / 4)) + Math.floor((26 * (month + 1)) / 10) + day) % 7;
console.log("day of week is", dayOfWeek);
var result = names[gender][dayOfWeek]
document.getElementById("result").innerText = "Your Akan Name is: " + result;
}
