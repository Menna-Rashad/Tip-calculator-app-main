// if the custom tip input field is selected, the other radio inputs are unchecked
const tipRatioInput = document.getElementById("tipInput");
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
