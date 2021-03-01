const count = () => {
  // Tagging html fields

  let txtStart = document.querySelector("#txtstart");
  let txtFinish = document.querySelector("#txtfinish");
  let txtStep = document.querySelector("#txtstep");
  let outcome = document.querySelector("#outcome");

  // Checkin fields
  if (
    txtStart.value.length === 0 ||
    txtFinish.value.length === 0 ||
    txtStep.value.length === 0
  ) {
    outcome.innerHTML = `Please insert the data correctly.`;
  } else {
    outcome.innerHTML = `<h3>Contando...</h3>`;

    // Converting fields to numbers
    let startNum = Number(txtStart.value);
    let finishNum = Number(txtFinish.value);
    let step = Number(txtStep.value);

    // Filtering
    if (step === 0) {
      step = 1;
      alert("Zero is not a valid step. Step will be considered as 1.");
    }

    if (startNum >= 1000000) {
      alert("Starting number can not be greater than 1000000.");
    }

    // Looping and Printing

    if (startNum < finishNum) {
      for (let num = startNum; num <= finishNum; num += step) {
        outcome.innerHTML += ` ${num} \u{1F449} `;
      }
    } else {
      for (let num = startNum; num >= finishNum; num -= step) {
        outcome.innerHTML += ` ${num} \u{1f449}`;
      }
    }

    outcome.innerHTML += `\u{1F3C6}`;

    txtStart.value = "";
    txtFinish.value = "";
    txtStep.value = "";
    txtStart.focus();
  }
};
