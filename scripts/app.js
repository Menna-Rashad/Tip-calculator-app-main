// Tip calculation
const bill = document.getElementById("bill");
const ckeckedTipRadio = document.querySelector("input[type=radio]:checked");
const tipRatioInput = document.getElementById("tipInput");
const numOfPeople = document.getElementById("num");
const reset = document.getElementById("reset");
const form = document.getElementById("myForm");
/*
    ---------- Tip Calculations ------------
    inputs: bill, ratio, numOfPeople
    output: tip amount devided by one person

    tip = bill * ratio / 100;
    tip = 142.55 * 15 / 100
    tip = 21.3825 total 
    then tip per 1 person = tip / numOfPeople
                          = 21.3825 / 5
                          = 4.2765
*/

form.addEventListener("change", (e) => {
  reset.disabled = false;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!numOfPeople.value || Number(numOfPeople.value) === 0) {
    console.log("can't be zero");
    const msg = document.querySelector("#errMsg");
    msg.style.display = "inline";
    console.log(msg.style.display);
    // numOfPeople.style.
  }
});

// if the custom tip input field is selected, the other radio inputs are unchecked
const radioElements = Array.from(
  document.querySelectorAll("input[type=radio]")
);

// focusin bubbles but focus doesn't
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
