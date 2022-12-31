const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, Password }
  } = event.currentTarget;
    
    // if (email.value || password.value === " ") {
    //   Window.alert('All fields must be filled in.Thanks!');  
    // }
    console.log(email.value, password.value);
    
});


