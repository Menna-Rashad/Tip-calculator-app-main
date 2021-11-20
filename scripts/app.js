// Tip calculation
const bill = document.getElementById("bill");
const tipRatioInput = document.getElementById("tipInput");
const numOfPeople = document.getElementById("num");
const reset = document.getElementById("reset");
const form = document.getElementById("myForm");
/*
    ---------- Tip Calculations ------------
    inputs: bill, ratio, numOfPeople
    output: tip amount and (bill + tip) per person

    tip = bill * ratio / 100;
    tip = 142.55 * 15 / 100
    tip = 21.3825 total 
    then tip per 1 person = tip / numOfPeople
                          = 21.3825 / 5
                          = 4.2765

    bill + tip = (142.55/4)+ 4.2765 =  whatever
*/
function whichRatio(radio, text) {
  if (radio) {
    return Number(radio.value);
  } else if (text) {
    return Number(text.value);
  } else {
    return 0;
  }
}

form.addEventListener("change", (e) => {
  reset.disabled = false;
});

numOfPeople.addEventListener("input", (e) => {
  if (!numOfPeople.value || Number(numOfPeople.value) === 0) {
    console.log("can't be zero");
    const msg = document.querySelector("#errMsg");
    msg.style.display = "inline";
    //console.log(numOfPeople.style); (to display style properties' names)
    numOfPeople.style.outlineColor = "red";
    numOfPeople.focus();
    console.log(numOfPeople.style);
  } else {
    const msg = document.querySelector("#errMsg");
    msg.style.display = "none";
    numOfPeople.style.outlineColor = "var(--Strong-cyan)";
    const billValue = Number(bill.value);
    // maybe a function here that returns either tip ratio?
    const ratio = whichRatio(
      document.querySelector("input[type=radio]:checked"),
      tipRatioInput
    );
    const people = Number(numOfPeople.value);

    const tipAmount = document.getElementById("tipAmount");
    tipAmount.textContent = `$${((billValue * ratio) / 100).toFixed(2)}`;
    const total = document.getElementById("total");
    total.textContent = `$${(
      billValue / people +
      (billValue * ratio) / 100 / people
    ).toFixed(2)}`;
  }
});

// if the custom tip input field is selected, the other radio inputs are unchecked
const radioElements = Array.from(
  document.querySelectorAll("input[type=radio]")
);

// "focusin" bubbles but "focus" doesn't
tipRatioInput.addEventListener("focus", () => {
  if (document.querySelector("input[type=radio]:checked")) {
    const checkedElement = document.querySelector("input[type=radio]:checked");
    checkedElement.checked = false;
  }
});

// if there was a tip ratio button selected, empty the input field of the ratio input
// to prevent getting two value of the tip ratio
radioElements.forEach((ele) => {
  ele.addEventListener("click", () => {
    tipRatioInput.value = "";
  });
});

// Reset Button
reset.addEventListener("click", (e) => {
  bill.value = "";
  numOfPeople.value = "";
  tipRatioInput.value = "";
  if (document.querySelector("input[type=radio]:checked")) {
    const ckeckedTipRadio = document.querySelector("input[type=radio]:checked");
    ckeckedTipRadio.checked = false;
  }
  const tipAmount = document.getElementById("tipAmount");
  tipAmount.textContent = `$0.00`;
  const total = document.getElementById("total");
  total.textContent = `$0.00`;
  reset.disabled = true;
  const msg = document.querySelector("#errMsg");
  msg.style.display = "none";
  numOfPeople.style.outlineColor = "var(--Strong-cyan)";
});
