const inputText = document.querySelector('input');
console.log(inputText);
console.dir(inputText);
console.log('Кількість символів, яка повинна бути в input - data-length:', inputText.getAttribute('data-length'), '\n\n');
const validationEvent = function (event) {
    console.log('Your text:', event.currentTarget.value);
    console.log('The length in your text is:', event.currentTarget.value.length, '\n\n');
    if (event.currentTarget.value.length == inputText.getAttribute('data-length')) {
        if (inputText.classList.contains('invalid')) {
            inputText.classList.remove('invalid');
            inputText.classList.add('valid');
        } else {
            inputText.classList.add('valid'); 
        }
        console.log('Validation OK !!!\n\n');
    } else {
        if (inputText.classList.contains('valid')) {
            inputText.classList.remove('valid');
            inputText.classList.add('invalid');
        } else { 
            inputText.classList.add('invalid');
        }
        console.log('Error validation:', inputText.getAttribute('placeholder'), '\n\n');
    }
}
inputText.addEventListener('blur', validationEvent);