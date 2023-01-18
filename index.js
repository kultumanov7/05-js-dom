// homework 05
// get table
let ageTable = document.getElementById('age-table');
console.log(ageTable);

// get label tags in table
let labelTags = ageTable.getElementsByTagName('label');
console.log(labelTags);

// get first td tag in table
let firstTd = ageTable.getElementsByTagName('td')[0];
console.log(firstTd);

// form with name search
let formSearch = document.body.firstElementChild;
console.log(formSearch);

// first input in that form
let firstInput = formSearch.getElementsByTagName('input')[0];
console.log(firstInput);

// second input in that form
let secondInput = formSearch.getElementsByTagName('input')[1];
console.log(secondInput);