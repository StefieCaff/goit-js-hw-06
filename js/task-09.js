//grab elements
const changeColorBtn = document.querySelector(".change-color");
const changedElem = document.querySelector("body");
const randomHexColor = document.querySelector(".color");           //in case hex color is very light
const randomHexColorDark = document.querySelector(".color-dark");  //in case hex color is very dark

// random color arrow function
// const getRandomHexColor = () => {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener('click', function () { //something happens when the button is clicked
  const randomColor = getRandomHexColor();             // constant assigned random color function
  changedElem.style.backgroundColor = randomColor;     //change the color of the body to random color
  randomHexColor.textContent = `${randomColor}`;       //show the value of the hex color in black
  randomHexColorDark.textContent = `${randomColor}`;   //show the value of the hex color in white
});
