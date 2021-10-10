// Tip calculation
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
const bill = document.getElementById("bill");
const ckeckedTipRadio = document.querySelector("input[type=radio]:checked");
const tipRatioInput = document.getElementById("tipInput");
const num = document.getElementById("num");
const reset = document.getElementById("reset");

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

radioElements.forEach((ele) => {
  ele.addEventListener("click", () => {
    tipRatioInput.value = "";
  });
});
