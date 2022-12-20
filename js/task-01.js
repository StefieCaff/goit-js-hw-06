
const numMsg = 'Number of categories:';
const categoryList = document.querySelectorAll('li.item');
console.log(numMsg, categoryList.length);


//USING DOM TRAVERSING METHOD
// // messages
// const categoryMsg = 'Category:';
// const elemMsg = 'Elements:';

// // categories

// const firstCategory = categoryList[0];
// const secondCategory = categoryList[1];
//const thirdCategory = categoryList[2];



// // elements
// const firstElemList = firstCategory.lastElementChild;
// const secondElemList = secondCategory.lastElementChild;
// const thirdElemList = thirdCategory.lastElementChild;

// const firstElemName = firstCategory.firstElementChild;
// const secondElemName = secondCategory.firstElementChild;
// const thirdElemName = thirdCategory.firstElementChild;

// //element numbers
// const numOfFirstElem = firstElemList.querySelectorAll('li');
// const numOfSecondElem = secondElemList.querySelectorAll('li');
// const numOfThirdElem = thirdElemList.querySelectorAll('li');

// console.log(categoryMsg, firstElemName.textContent);
// console.log(elemMsg, numOfFirstElem.length);

// console.log(categoryMsg, secondElemName.textContent);
// console.log(elemMsg, numOfSecondElem.length);

// console.log(categoryMsg, thirdElemName.textContent);
// console.log(elemMsg, numOfThirdElem.length);

//USING CLASSIC FOR LOOP

// for (var  i = 0; i < categoryList.length; i++) {
//     console.log('Category: ' , categoryList[i].firstElementChild.textContent);
//     console.log('Elements:' , categoryList[i].lastElementChild.children.length)
//  }


//USING FOREACH AND ARROW FUNCTION

 categoryList.forEach(categoryList => {
	  console.log('Category: ', categoryList.firstElementChild.textContent);
      console.log('Elements:' , categoryList.lastElementChild.children.length);
	});