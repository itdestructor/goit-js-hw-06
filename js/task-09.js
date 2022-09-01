function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let myBody = document.querySelector('body') 
console.log(myBody);
let myBtnChangeColor = document.querySelector('.change-color')
console.log(myBtnChangeColor)
let mySpan = document.querySelector('span')

myBtnChangeColor.addEventListener('click',()=>{
  myBody.style.backgroundColor = getRandomHexColor()
  mySpan.innerHTML = myBody.style.backgroundColor
})
