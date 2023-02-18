const calculateBtn = document.getElementById("calculation-btn");

const baseValue = document.getElementById("base-value");
const heightValue = document.getElementById("height-value");

const calculateCard = document.getElementById("calculation-card");

function calculation () {
  let calculate = baseValue * heightValue;
  calculateCard.innerText(calculate);

  return calculateShow;
}
