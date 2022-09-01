const formAction = document.querySelector('form.login-form');

console.log(formAction);
console.dir(formAction);

const validationForm = function (event) {
    event.preventDefault();


    const { elements: { email, password } } = event.currentTarget;


    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені');
    } else {
        console.log({ [email.name]: email.value, [password.name]: password.value });
        formAction.reset();
    }
}

formAction.addEventListener('submit', validationForm);