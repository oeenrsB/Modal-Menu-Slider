const form = document.getElementById('form');
// const formControl = document.querySelector('.form-control');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('confirm');
const small = document.getElementById('small');


function showError (input, message) {
    // const errorMessageElement = input.nextElementSibling;
    // errorMessageElement.innerText = message;
    // input.parenrNode.classList.add('error');

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess (input) {
    // input.parenrNode.classList.add('success');

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = "Valid Input";
}

function getFieldName(input) {
    let str = input.id;
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function checkRequired (input) {
    input.forEach(e => {
        if(e.value === ''){
            showError(e, `${getFieldName(e)} Is Required`);
        }
        // else{
        //     showSuccess(e);  // overide 
        // }
    });
}

function checkLength (input, min, max) {
    if (input.value.length < min) {
        showError(input,
            `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input,
            `${getFieldName(input)} must be at most ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email.value.trim())){
        showSuccess(email);
    }
    else{
        showError(email, 
            `${getFieldName(input)} Is not Valid`);
    }
}

function checkMatch(password1, password2) {
    if(password1.value != password2.value) {
        showError(password2, 
            `${getFieldName(password2)} does not match`);
    }
    else {
        showSuccess(password2);
    }
}

function submitionHandeler (e) {
    e.preventDefault();

    let isValid = true;

    checkRequired([userName, email, password1, password2]);
    checkLength(userName, 3, 7);
    checkLength(password1, 5, 10);
    checkEmail(email);
    checkMatch(password1, password2);

    // Find the first invalid field and focus on it
    const invalidFields = Array.from(document.querySelectorAll('.error input'));
    if (invalidFields.length > 0) {
        invalidFields[0].focus();
        isValid = false;
    }

    if (isValid) {
        alert('Form Submitted Successfully!');
    }
}

form.addEventListener('submit', submitionHandeler);













































