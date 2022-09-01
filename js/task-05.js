let myInput = document.querySelector('input')
let mySpan = document.querySelector('span')

myInput.addEventListener('input',() => {

mySpan.innerHTML = myInput.value

if(myInput.value === ''){
    mySpan.innerHTML = 'Anonymous'
}

})