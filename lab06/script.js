document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const flight = document.getElementById('flight');

    const feedback = document.getElementById('feedback');

    name.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    phone.addEventListener('input', validatePhone);
    flight.addEventListener('input', validateFlight);

    form.addEventListener('submit', (e) => {
        updateFeedback();
        if (!validateForm()) {
            e.preventDefault();
        }
    });

    function updateFeedback() {
        let message = '';
        if (! validateForm) {
            message = 'Please fill out the form correctly. ';
        }

        if (! validateName()) {
            message += 'Name must be letters only. ';
        }
        if (! validateEmail()) {
            message += 'Email must be valid. ';
        }
        if (! validatePhone()) {
            message += 'Phone must be 9 digits. ';
        }
        if (! validateFlight()) {
            message += 'Flight must be F456 or F123. ';
        }
        feedback.textContent = message;
    }

    function validateName() {
        const val = name.value;
        let valid = true;
        name.classList.add('valid-input');
        name.classList.remove('invalid-input');

        if (!/^[a-zA-Z]+$/.test(val)) {
            valid = false;
        }

        if (valid == false) {
            name.classList.remove('invalid-input');
            name.classList.remove('valid-input');
        }

        return valid;
    }

    function validateEmail() {
        const val = email.value;
        let valid = true;

        email.classList.add('valid-input');
        email.classList.remove('invalid-input');

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(val)) {
            valid = false;
        }

        if (valid == false) {
            email.classList.add('invalid-input');
            email.classList.remove('valid-input');
        }

        return valid;
    }

    function validatePhone() {
        const val = phone.value;
        let valid = true;

        phone.classList.add('valid-input');
        phone.classList.remove('invalid-input');
        
        if (val.length != 9) {
            valid = false;
        }
        if (!/^\d+$/.test(val)) {
            valid = false;
        }

        if (valid == false) {
            phone.classList.add('invalid-input');
            phone.classList.remove('valid-input');
        }

        return valid;
    }

    function validateFlight() {
        const val = flight.value;
        let valid = true;

        flight.classList.add('valid-input');
        flight.classList.remove('invalid-input');

        if (val != 'F456' && val != 'F123') {
            valid = false;
        }
        
        if (valid == false) {
            flight.classList.add('invalid-input');
            flight.classList.remove('valid-input');
        }

        console.log(valid);
        return valid;
    }

    function validateForm() {
        return validateName() && validateEmail() && validatePhone() && validateFlight();
    }
});