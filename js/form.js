//UC => 4 Added form validations
window.addEventListener('DOMContentLoaded', (event) => {
    validatingInputs();
    callBackFunction();
    callBackResetFunction();
})

function validatingInputs() {
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const address = document.querySelector('#address');
    const nameError = document.querySelector('.text-error');
    const phoneError = document.querySelector('.phone-error');
    const addressError = document.querySelector('.address-error');

    name.addEventListener('input', function() {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name.value)) {
            nameError.textContent = "";
        } else {
            nameError.textContent = "Name is incorrect";
        }
    });

    phone.addEventListener('input', function() {
        const phoneRegex = RegExp('^[0-9]{10}$');
        if (phoneRegex.test(phone.value)) {
            phoneError.textContent = "";
        } else {
            phoneError.textContent = "Phone number is incorrect";
        }
    });

    address.addEventListener('input', function() {
        const addressRegex = RegExp('^[a-zA-Z0-9\s,.-: ]{3,}$');
        if (addressRegex.test(address.value)) {
            addressError.textContent = "";
        } else {
            addressError.textContent = "Address is incorrect";
        }
    });
}

//UC => 5 Make sure to set a call back function when onsubmit 
//and onreset event is fired when user clicks on this button

function callBackSubmitFunction() {
    document.queryselector("#addButton")
        .addEventListener("click", function() {
            console.log("User has clicked on the submit button!");
        });
}

function callBackResetFunction() {
    document.queryselector("#resetButton")
        .addEventListener("click", function() {
            console.log("User has clicked on the reset button!");
        });
}