const listCategories = document.querySelector('ul#categories');
const listItemCategories = listCategories.querySelectorAll('li.item');
console.log('Number of categories: ', listItemCategories.length, '\n\n');
// console.log(listItemCategories);
listItemCategories.forEach(item => {
    console.log('Category: ', item.querySelector('h2').textContent);
    console.log('Elements: ', item.querySelectorAll('li').length, '\n\n');
});