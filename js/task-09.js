//grab elements
const changeColorBtn = document.querySelector(".change-color");
const changedElem = document.querySelector("body");
const randomHexColor = document.querySelector(".color");

// random color arrow function
// const getRandomHexColor = () => {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  changedElem.style.backgroundColor = randomColor;
  randomHexColor.textContent = `${randomColor}`;
});
