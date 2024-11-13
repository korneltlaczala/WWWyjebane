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

        if (!/^[a-zA-Z]+$/.test(val)) {
            valid = false;
        }
        validateInput(name, valid);
        return valid;
    }

    function validateEmail() {
        const val = email.value;
        let valid = true;

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(val)) {
            valid = false;
        }
        validateInput(email, valid);

        return valid;
    }

    function validatePhone() {
        const val = phone.value;
        let valid = true;

        if (val.length != 9) {
            valid = false;
        }
        if (!/^\d+$/.test(val)) {
            valid = false;
        }
        validateInput(phone, valid);

        return valid;
    }

    function validateFlight() {
        const val = flight.value;
        let valid = true;

        if (val != 'F456' && val != 'F123') {
            valid = false;
        }
        validateInput(flight, valid);

        console.log(valid);
        return valid;
    }

    function validateForm() {
        return validateName() && validateEmail() && validatePhone() && validateFlight();
    }

    function validateInput(input, valid) {
        if (valid) {
            input.classList.add('valid-input');
            input.classList.remove('invalid-input');
        } else {
            input.classList.add('invalid-input');
            input.classList.remove('valid-input');
        }
    }
});