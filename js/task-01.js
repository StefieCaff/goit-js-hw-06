// messages
const numMsg = 'Number of categories:';
const categoryMsg = 'Category:';
const elemMsg = 'Elements:';
// categories
const categoryList = document.querySelectorAll('.item');
const firstCategory = categoryList[0];
const secondCategory = categoryList[1];
const thirdCategory = categoryList[2];
// elements
const firstElemList = firstCategory.lastElementChild;
const secondElemList = secondCategory.lastElementChild;
const thirdElemList = thirdCategory.lastElementChild;

const firstElemName = firstCategory.firstElementChild;
const secondElemName = secondCategory.firstElementChild;
const thirdElemName = thirdCategory.firstElementChild;
//element numbers
const numOfFirstElem = firstElemList.querySelectorAll('li');
const numOfSecondElem = secondElemList.querySelectorAll('li');
const numOfThirdElem = thirdElemList.querySelectorAll('li');


console.log(numMsg, categoryList.length);

console.log(categoryMsg, firstElemName.textContent);
console.log(elemMsg, numOfFirstElem.length);

console.log(categoryMsg, secondElemName.textContent);
console.log(elemMsg, numOfSecondElem.length);

console.log(categoryMsg, thirdElemName.textContent);
console.log(elemMsg, numOfThirdElem.length);