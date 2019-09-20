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