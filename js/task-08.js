class User {

    constructor(selector) {

    }
}




const loginForm = document.querySelector(".login-form");

const email = loginForm.firstElementChild.value;
// const password = loginForm.password.value;
console.log(email);
// console.log(password);
console.log(loginForm);

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value || password.value == " ") {
        alert('The fields must be filled in. Thanks!');
        return false;
    }
});


