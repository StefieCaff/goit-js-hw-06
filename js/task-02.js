const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const potatoListItem = document.createElement('li');
potatoListItem.textContent = 'Potatoes';
potatoListItem.classList.add("item");

const mushroomListItem = document.createElement('li');
mushroomListItem.textContent = 'Mushrooms';
mushroomListItem.classList.add("item");

const garlicListItem = document.createElement('li');
garlicListItem.textContent = 'Garlic';
garlicListItem.classList.add("item");

const tomatoListItem = document.createElement('li');
tomatoListItem.textContent = 'Tomatos';
tomatoListItem.classList.add("item");

const herbsListItem = document.createElement('li');
herbsListItem.textContent = 'Herbs';
herbsListItem.classList.add("item");

const condimentsListItem = document.createElement('li');
condimentsListItem.textContent = 'Condiments';
condimentsListItem.classList.add("item");

ingredientsList.append(potatoListItem, mushroomListItem, garlicListItem, tomatoListItem, herbsListItem, condimentsListItem);