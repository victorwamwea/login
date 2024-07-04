function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Placeholder for AJAX/Fetch login logic
        // Example: fetch('/login', { method: 'POST', body: new FormData(loginForm) })
        //   .then(response => {
        //     if (response.ok) {
        //       // Handle successful login here
        //     } else {
        //       setFormMessage(loginForm, "error", "Invalid username/password combination");
        //     }
        //   })
        //   .catch(error => {
        //     // Handle network errors here
        //   });

        // Temporarily setting an error message until AJAX/Fetch logic is implemented
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const loginBtn = document.querySelector('.login-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const linkCreateAccount = document.getElementById('linkCreateAccount');
    const linkLogin = document.getElementById('linkLogin');
    const loginForm = document.getElementById('login');
    const createAccountForm = document.getElementById('createAccount');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    loginBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    linkCreateAccount.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.add('form--hidden');
        createAccountForm.classList.remove('form--hidden');
    });

    linkLogin.addEventListener('click', (event) => {
        event.preventDefault();
        createAccountForm.classList.add('form--hidden');
        loginForm.classList.remove('form--hidden');
    });
});