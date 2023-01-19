const symbolInput = document.getElementById('validation-input');
  
symbolInput.addEventListener('blur', () => {
    if (symbolInput.value.length == symbolInput.getAttribute('data-length')) {
        symbolInput.style.borderColor = "#4caf50";
    } else {
        symbolInput.style.borderColor = "#f44336";
    }
    });



// function validationBorderColor() {
//     if (symbolInput.value.length >= 6) {
//         symbolInput.classList.add("validation-input.valid");
//     }

//     else {
//         symbolInput.classList.add("validation-input.invalid");
//     }
// }; 

// symbolInput.addEventListener('blur', validationBorderColor);

