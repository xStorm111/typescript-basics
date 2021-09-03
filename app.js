"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
//! = typescript, please ignore
const buttonElement = document.querySelector('button');
const numResults = [];
const textResults = [];
// | = union type
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return num1 + num2;
    }
    else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(result);
    numResults.push(result);
    console.log(stringResult);
    textResults.push(stringResult);
    console.log(numResults, textResults);
    printResult({ val: result, timestamp: new Date() });
});

//Promise is a generic type
const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result).split('w');
});
