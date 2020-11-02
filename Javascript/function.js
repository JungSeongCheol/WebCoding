// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const Jung = { name : 'Jung'};
changeName(Jung);
console.log(Jung);

// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg))
}
printAll('dream', 'coding', 'Jung');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upagrde logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assinged as a value to variable
// can be passed as an argument to other functions.
// can be returned by anthoer function
// (다른 변수와 마찬가지로 변수에 할당되고, 함수의 파라미터도되고, 다른 함수의 리턴형태도 가능하다. )

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// hoisted -> var hoisted처럼 함수가 선언되기 이전에 호출해도 호출이 가능하다
// 선언된 함수를 자바스크립트 엔진이 가장 위로 올려준다.
// a function expression is created when the execution reaches it.
const print = function() { // 함수를 선언하자마자 print의 변수에 저장함.
    console.log('print'); // 함수의 이름이없음(anonymous function)
};
print(); 
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 함수를 전달해서 상황에 맞으면 전달된 함수를 부른는것
// (Callback 함수는 printYes, printNo임)
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions (함수 안에서 함수 자기자신을 부름)
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function -> 함수를 간결하게 만들어줌
// 항상 이름이 없음 (Arrow =>)
// always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
// add 와 똑같이 expressed function으로 바꾸면
// const add = function(a, b){
//     return a + b;
// }

//블록이 필요할시 블록쓰고 return 반드시 필요
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); // 함수 선언과 동시에 실행이 됨.

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder