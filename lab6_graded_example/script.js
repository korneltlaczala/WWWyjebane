document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const groupName = document.getElementById('group-name');
    const groupPassword = document.getElementById('group-password');
    const phone = document.getElementById('phone');

    const nameFeedback = document.getElementById('group-name-feedback');
    const passwordFeedback = document.getElementById('group-password-feedback');
    const phoneFeedback = document.getElementById('phone-feedback');

    groupName.addEventListener('input', validateName);
    groupPassword.addEventListener('input', validatePassword);
    phone.addEventListener('input', validatePhone);

    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
            alert('Sprawdzasz wolniej niż norris wjeżdża w T1');
        }
    });

    function validateName() {
        const val = groupName.value;
        let valid = true;
        nameFeedback.style.visibility = 'hidden';
        groupName.classList.add('valid-input');
        groupName.classList.remove('invalid-input');

        if (val.charAt(0) !== val.charAt(0).toUpperCase()) {
            nameFeedback.textContent = 'Group name must start with a capital letter';
            valid = false;
        }
        if (val.length <= 0) {
            nameFeedback.textContent = 'Group name cannot be empty';
            valid = false;
        }

        if (valid == false) {
            nameFeedback.style.visibility = 'visible';
            groupName.classList.remove('invalid-input');
            groupName.classList.remove('valid-input');
        }

        return valid;
    }

    function validatePassword() {
        const val = groupPassword.value;
        let valid = true;

        passwordFeedback.style.visibility = 'hidden';
        groupPassword.classList.add('valid-input');
        groupPassword.classList.remove('invalid-input');

        if (!/\d/.test(val)) {
            passwordFeedback.textContent = "Password must contain at least one digit";
            valid = false;
        }

        if (val.length < 8) {
            passwordFeedback.textContent = 'Password must be at least 8 characters';
            valid = false;
        }

        if (val.length == 0) {
            passwordFeedback.textContent = 'Password cannot be empty';
            valid = false;
        }

        if (valid == false) {
            passwordFeedback.style.visibility = 'visible';
            groupPassword.classList.add('invalid-input');
            groupPassword.classList.remove('valid-input');
        }

        return valid;
    }

    function validatePhone() {
        const val = phone.value;
        let valid = true;

        phoneFeedback.style.visibility = 'hidden';
        phone.classList.add('valid-input');
        phone.classList.remove('invalid-input');
        
        if (val.length != 9) {
            phoneFeedback.textContent = 'Phone number must have 9 digits';
            valid = false;
        }
        if (!/^\d+$/.test(val)) {
            phoneFeedback.textContent = 'Phone number must contain only digits';
            valid = false;
        }

        if (valid == false) {
            phoneFeedback.style.visibility = 'visible';
            phone.classList.add('invalid-input');
            phone.classList.remove('valid-input');
        }

        return valid;
    }

    function validateForm() {
        return validateName() && validatePassword() && validatePhone();
    }
});