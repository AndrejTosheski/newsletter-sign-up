const btnSubmit = document.getElementById('btnSubmit');
const mail = document.getElementById('mail');
const error = document.getElementById('error');

const isEmailValid = (email) => {
    if (!email) {
        mail.style.border = '1px solid red';
        mail.style.background = '#ffcccb';
        error.textContent = 'Please Enter Valid Email';
        return false;
    }

    return true;
};

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    const isValid = isEmailValid(mail.value);
    if (isValid) {
        location.reload();
    }
});