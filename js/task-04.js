let plusOneBtn = document.querySelector('#increment')


let minOneBtn =  document.querySelector('#decrement')


let myCounterZone = document.getElementById('value')


let count = 0

plusOneBtn.addEventListener('click',() =>{

count += 1

myCounterZone.innerHTML = count

})

minOneBtn.addEventListener('click',() =>{

    count -= 1
    
    myCounterZone.innerHTML = count
    
    })