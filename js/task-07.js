let myInput = document.querySelector('#font-size-control')

let myText = document.querySelector('span')


myInput.addEventListener('change',() =>{
    myText.style.fontSize = `${myInput.value}` + 'px'
})

