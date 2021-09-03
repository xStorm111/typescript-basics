const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;

//! = typescript, please ignore
const buttonElement = document.querySelector('button')!;

const numResults: number[] = [];
const textResults: string[] = [];

//Type aliases
type NumOrString = number | string;
type Result = { val: number; timestamp: Date }

//Interfaces
interface ResultObj {
    val: number; 
    timestamp: Date;
}

// | = union type
function add(num1: NumOrString, num2: NumOrString){
    if(typeof(num1) === 'number' && typeof(num2) === 'number'){
        return num1 + num2;
    }
    else if(typeof(num1) === 'string' && typeof(num2) === 'string'){
        return num1 + ' ' + num2;
    }
    else{
        return +num1 + +num2;
    }
}

function printResult(resultObj: Result) {
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(result);
    numResults.push(result as number);
    console.log(stringResult);
    textResults.push(stringResult as string);
    console.log(numResults, textResults);
    printResult({val: result as number, timestamp: new Date()});
})

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
})

myPromise.then((result) => {
    console.log(result);
})