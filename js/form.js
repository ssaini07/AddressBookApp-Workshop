let addressBookObject = {};
let isUpdate = false;
window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validatePhone();
    validateAddress();
})

function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        try {
            let personData = new AddressBookApp();
            personData.name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
}

function validatePhone() {
    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function() {
        try {
            let personData = new AddressBookApp();
            personData.phone = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });
}

function validateAddress() {
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        try {
            let personData = new AddressBookApp();
            personData.address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
}

const save = (event) => {
    try {
        event.preventDefault();
        event.stopPropagation();
        let personAddressBook = setAddressBookObject();
        console.log(personAddressBook);
        createAndUpdateStorage(personAddressBook);
        alert("Data Stored With Name: " + personAddressBook._name);
        window.location.replace(Site_Properties.home);
    } catch (e) {
        console.log(e)
    }
}

const setAddressBookObject = () => {
    let addressBookApp = new AddressBookApp();

    addressBookApp.name = getInputValueId('#name');
    addressBookApp.phone = getInputValueId('#phone')
    addressBookApp.address = getInputValueId('#address')
    addressBookApp.city = getInputValueId('#city')
    addressBookApp.state = getInputValueId('#state');
    addressBookApp.zipcode = getInputValueId('#zipcode');
    addressBookApp.id = addressBookObject._id;
    return addressBookApp;
}

const createAndUpdateStorage = (personData) => {
    let dataList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (dataList) {
        let existingEmpData = dataList.find(data => data._id == personData.id);
        if (!existingEmpData) {
            personData.id = createNewBookId();
            dataList.push(personData);
        } else {
            const index = dataList.map(emp => emp._id).indexOf(personData.id);
            dataList.splice(index, 1, personData);
        }
    } else {
        personData.id = createNewBookId();
        dataList = [personData];
    }
    localStorage.setItem('AddressBookList', JSON.stringify(dataList));
}

const getInputValueId = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValue = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItem.forEach(item => {
        if (item.checked == true) {
            setItem.push(item.value);
        }
    })
    return setItem;
}

const createNewBookId = () => {
    let bookId = localStorage.getItem('BookId');
    bookId = !bookId ? 1 : (parseInt(bookId) + 1).toString();
    localStorage.setItem('BookId', bookId);
    return bookId;
}

// UC => 9
//On cancel redirect to home page
const cancel = () => {
    window.location.replace(Site_Properties.home);
}

//Reset the values
function resetTheForm() {
    const resetForm = () => {
        setTextValue('#name', '');
        setTextValue('#phone', '');
        setValue('#address', '');
        setTextValue('#ciy', '');
        setTextValue('#state', '');
        setTextValue('#zipcode', '');
    }

    const setTextValue = (id, message) => {
        const textError = document.querySelector(id);
        textError.textContent = message;
    }

    const setValue = (id, value) => {
            let element = document.querySelector(id);
            element.value = value;
        }
        //console.log(resetForm);
    alert("Data has been reset now")
}