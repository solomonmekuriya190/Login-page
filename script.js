const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {


event.preventDefault();

const email = emailInput.value.trim();

const password = passwordInput.value;

if (email === "" || password === "") {

    message.textContent = "Please fill in all fields!";

    message.style.color = "red";

} else {

    message.textContent = "Form validation successful!";

    message.style.color = "green";

    console.log("Email:", email);

}


});
