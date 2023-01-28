const loginForm = document.querySelector("form.login-form");

function submitLoginForm(event) {
    event.preventDefault();

    const loginElements = event.currentTarget.elements;
    const email = loginElements.email.value;
    const password = loginElements.password.value;

    if (email == "" || password == "") {
        alert("The fields must be filled in. Thanks!");
        loginForm.reset();
        return false;
    }

    const loginFormData = {
        email,
        password,
    }
    
    console.log(loginFormData);
    loginForm.reset();
};

loginForm.addEventListener("submit", submitLoginForm);
