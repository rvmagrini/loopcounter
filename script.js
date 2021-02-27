const count = () => {
  // Tagging form fields

  let txtStart = document.querySelector("#txtstart").value;
  let txtFinish = document.querySelector("#txtfinish").value;
  let txtStep = document.querySelector("#txtstep").value;

  // Checkin fields
  if (txtStart.length === 0 || txtFinish.length === 0 || txtStep.length === 0) {
    alert("Please insert the data correctly.");
  }

  // Converting fields to numbers
  let startNum = Number(txtStart);
  let finishNum = Number(txtFinish);
  let step = Number(txtStep);

  //  If step = 0
  if (step === 0) {
    step = 1;
  }

  // Looping and Storing
  let outcomeArr = [];

  if (startNum < finishNum) {
    for (let num = startNum; num < finishNum; num += step) {
      outcomeArr.push(num);
    }
  } else {
    for (let num = finishNum; num > startNum; num -= step) {
      outcomeArr.push(num);
    }
  }

  console.log(outcomeArr);
};
