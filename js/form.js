//UC => 4 Added form validations
window.addEventListener('DOMContentLoaded', (event) => {
    validatingInputs();
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
            nameError.textContent = "1)First letter must be in uppercase." +
                "\n2)Minimum 3 characters";
        }
    });

    phone.addEventListener('input', function() {
        const phoneRegex = RegExp('^[+][1-9]{2}[-][0-9]{10}$');
        if (phoneRegex.test(phone.value)) {
            phoneError.textContent = "";
        } else {
            phoneError.textContent = "1)Phone number should be starts with country code" +
                "\n2)Phone number must be have 10 digits (Ex:+91-1234567890)";
        }
    });

    address.addEventListener('input', function() {
        const addressRegex = RegExp('^[a-zA-Z0-9\s,.-: ]{3,}$');
        if (addressRegex.test(address.value)) {
            addressError.textContent = "";
        } else {
            addressError.textContent = "Sorry entered address is incorrect";
        }
    });
}

//Declaring save and reset method
const save = () => {
    alert("Save button");
}

const reset = () => {
    alert("Reset button");
}