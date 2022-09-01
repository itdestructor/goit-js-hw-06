const formEl = document.querySelector('.login-form')
const submitButton = document.querySelector('button')


formEl.addEventListener('submit',(event) => {
    const {elements: {email,password}} = event.target
    event.preventDefault()
    if(email.value.length === 0 || password.value.length === 0){
        alert('Всі поля мають бути заповнені!')
    }
    const userData = {
        [email.name] :email.value,
        [password.name] :password.value
    }
    console.log(userData);
    event.currentTarget.reset()
})