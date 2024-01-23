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

    
	//signup button 

    let signupButton = document.querySelector('.signup-box .clkbtn');

    if (signupButton) {
        signupButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default form submission

            let nameInput = document.querySelector('.signup-box .name');
            let emailInput = document.querySelector('.signup-box .email');
            let passwordInput = document.querySelector('.signup-box .password');
            let confirmPasswordInput = document.querySelector('.signup-box .password-ele'); // Update class name

            if (nameInput.value.trim() === '' || !validateEmail(emailInput.value) || passwordInput.value.trim() === '' || passwordInput.value !== confirmPasswordInput.value) {
                alert('Please enter valid information and make sure the passwords match.');
                return;
            }
            // location.reload();
        });
    }

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


