let myInput = document.getElementById('validation-input')
let myInputLengthMax = myInput.getAttribute('data-length')

myInput.addEventListener('blur',() => {
    if(myInput.value.length === Number(myInputLengthMax)){
        if(myInput.classList.contains('invalid')){
            myInput.classList.remove('invalid')
            myInput.classList.add('valid')
        } else {
            myInput.classList.add('valid')
        }
        
    } else {
        myInput.classList.add('invalid')
    }
})