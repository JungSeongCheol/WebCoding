// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(`jung\`s \n\tbook`);

//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// o=postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6); //less than or eqaul
console.log(10 > 6);  // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value 즉, 이거에 가장 중요한것은
// 하나라도 true가 나오면 계산을 멈추고 그값을 바로 리턴한다.
// 그러므로 value1, 2중 하나만 true라도
// wasting time인 check함수를 불러오지 않고 바로 return해버림
// 따라서 가장 무거운 함수를 리턴할때는 가장 뒤에 두는게 좋다.
console.log(`or ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
// and도 false가 가장 먼저 나오면 그뒤에꺼 계산안함
// 이것도 마찬가지로 가장 무거운 함수를 리턴할때는 가장 뒤에 두는게 좋다.
console.log(`or ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('aa');
    }
    return true;
}

// and는 null check할때도 많이쓰인다.
// often used to compress long if-statement
// nullableObject && nullableObject.something 이러면 
// nullObject가 null이 아닐때만
// nullableObject.something을 계산한다.
// 코드로 풀어 보자면
// if (nullableObject != null){
//     nullableObject.something; 
// }

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입을 변경해서 검사)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion (타입또한 신경써서 검사)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// 같은 값을 집어 넣었지만, 메모리 ref1, ref2이렇게 다른곳에 저장한후
// 같은 값을 저장했기 때문에 같지 않다. (object의 특징)
const Jung1 = { name: 'Jung' };
const Jung2 = { name: 'Jung' };
const Jung3 = Jung1; // Jung3 는 Jung 1을 가리킴 - 똑같음
console.log(Jung1 == Jung2); // false
console.log(Jung1 === Jung2); // false (똑같은 type이든 아니든 다른 ref기떄문)
console.log(Jung1 === Jung3); // true;

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false 실질 타입이 다름
console.log('' == false); // 단은 true -> empty 문자열은 false로 나타낼수 있음
console.log('' === false);  // false 실질 타입이 다름
console.log(null == undefined); // 답은 true -> null 과 undefined 같은것으로 간주
console.log(null === undefined); // false 타입이 다름

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if(name === 'Jung'){
    console.log('Welcome, Jung!');
}
else if(name === 'coder'){
    console.log('You are amazing coder')
}
else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'Jung' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE'
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while( i> 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while( i > 0);

// for loop, for(begin: condition; step)
for(i = 3; i > 0 ; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for(let j = 0; j< 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
    
}

for (let i = 0; i <= 10; i++) {
    if(i % 2 === 1){
        continue;
    }
    console.log(`${i}`);
}

for(let i = 0; i<= 10; i++){
    if( i > 8){
        break;
    }
    console.log(`${i}`);
}