const changeColorBtn = document.querySelector(".change-color");
const changedElem = document.querySelector(".color");
const randomColor = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  changedElem.style.backgroundColor = randomColor;
};

changeColorBtn.addEventListener("click", changeColor);
