const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const plusSignButton = document.querySelector(".plus");
const minusSignButton = document.querySelector(".minus");
const timesSignButton = document.querySelector(".times");
const divideSignButton = document.querySelector(".divided");
const result = document.querySelector(".result");
const clearDataButton = document.querySelector(".clear");
const errorMessage = document.querySelector(".error");

const plus = () => {
  if (checkInputs()) {
    return;
  }
  let sum = Number(firstInput.value) + Number(secondInput.value);
  result.innerHTML = `The result is: ${sum}`;
};
const minus = () => {
  if (checkInputs()) {
    return;
  }
  let sum = Number(firstInput.value) - Number(secondInput.value);
  result.innerHTML = `The result is: ${sum}`;
};
const times = () => {
  if (checkInputs()) {
    return;
  }
  let sum = Number(firstInput.value) * Number(secondInput.value);
  result.innerHTML = `The result is: ${sum}`;
};
const divide = () => {
  if (checkInputs()) {
    return;
  }
  if (divisionByZero()) {
    return;
  }
  let sum = Number(firstInput.value) / Number(secondInput.value);
  result.innerHTML = `The result is: ${sum}`;
};

const clear = () => {
  result.innerHTML = "";
  firstInput.value = "";
  secondInput.value = "";
};

const checkInputs = () => {
  result.innerHTML = "";
  if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
    errorMessage.textContent = "Please fill in the inputs...";
    return true;
  }
  errorMessage.textContent = "";
  return false;
};

const divisionByZero = () => {
  if (secondInput.value.trim() === "0") {
    errorMessage.textContent = "Divion by zero will result in infinity...";
    return true;
  }
  errorMessage.textContent = "";
  return false;
};

plusSignButton.addEventListener("click", plus);
minusSignButton.addEventListener("click", minus);
timesSignButton.addEventListener("click", times);
divideSignButton.addEventListener("click", divide);
clearDataButton.addEventListener("click", clear);
