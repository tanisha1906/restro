let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});


document.addEventListener('DOMContentLoaded', function () {
    // login button

    var loginButton = document.querySelector('.login-box .clkbtn');
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            var emailInput = document.querySelector('.login-box .email');
            var passwordInput = document.querySelector('.login-box .password');

            if (!validateEmail(emailInput.value) || passwordInput.value.trim() === '') {
                alert('Please enter a valid email and password.');
                return;
            }//The following code block checks if the email is valid using a validateEmail 
            //function (not provided in the snippet). It also checks if the password is not an empty string. If either condition is not met, it shows an alert with the message "Please enter a valid email and password."
            location.reload();//If both email and password are valid, the page is reloaded .
        });
    }
    
	//signup button 

    var signupButton = document.querySelector('.signup-box .clkbtn');
    if (signupButton) {
        signupButton.addEventListener('click', function () {
        
            var nameInput = document.querySelector('.signup-box .name');
            var emailInput = document.querySelector('.signup-box .email');
            var passwordInput = document.querySelector('.signup-box .password');
            var confirmPasswordInput = document.querySelector('.signup-box .password-confirm');

            if (nameInput.value.trim() === '' || !validateEmail(emailInput.value) || passwordInput.value.trim() === '' || passwordInput.value !== confirmPasswordInput.value) {
                alert('Please enter valid information and make sure the passwords match.');
                return;
            }
            location.reload();
        });
    }

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


