const textSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

textSizeControl.onchange = function () {
    text.style.fontSize = (textSizeControl.value) + 'px';
};

//oninput
// textSizeControl.oninput = function () {
//     text.style.fontSize = (textSizeControl.value) + 'px';
// };