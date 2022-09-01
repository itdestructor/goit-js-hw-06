function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


let divAmountForm = document.querySelector('input')
console.log(divAmountForm);
let createBtn = document.querySelectorAll('button')[0]
let deleteBtn = document.querySelectorAll('button')[1]
let divBox = document.getElementById('boxes')

let firstWidth = 30
let firstHeight = 30

createBtn.addEventListener('click',() => {


  for(let i = 0;i < divAmountForm.value;i++){
    let newBox = document.createElement('div');
    newBox.style.width = firstWidth + 'px'
    newBox.style.height = firstHeight + 'px'
    newBox.style.backgroundColor = getRandomHexColor()
    divBox.append(newBox)

    firstHeight += 10
    firstWidth += 10
  
  }

  firstHeight = 30
  firstWidth = 30
})

deleteBtn.addEventListener('click',() =>{
  divBox.innerHTML = ''
})