const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let myList = ingredients.map(el => {
  const newLi = document.createElement('li')
  newLi.textContent = `${el}`
  newLi.classList.add('item')
  return newLi
})
console.log(myList);

document.querySelector('#ingredients').append(...myList)

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.