// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';
console.log(age);

// 2. Variable, rw(read/write)
// let (added in ES6) 변수선언
// Block scope - 블록안에있는것만 볼 수 있다.

let globalName = 'global name'; //global scope임. 블록을 사용하지 않았음.
{
    let name = 'Jung';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name); // 값이 나오지 않는다. -> 변수를 블록안에 선언했기 때문에.
console.log(globalName);

// var (don't ever use this)
// var hoisting 어디에 선언했는지 상관없이 항상 가장 위로 선언을 끌여올려줌
// hoisting - 끌어올리다.
// var는 블록을 철저히 무시함.
console.log(age);
{
    age = 4;
    var age;
}
console.log(age);

// 3. Contant 선언후 읽기만 가능
// use const whenever possible.
// only use let if variable needs to change

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen object (i.e, obejct.freeze())
// 변경 불가능
// Mutable data types: all object by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safty
// - reduce human mistakes 왠만하면 값이 바뀔 필요가 없다면 const로 정의하는게 좋다.

// 4. Variable types
// primitive - 더이상 작은 단위로 나눠질수 없는 한가지의 아이템
// single item: number, string, boolean, null, undefiedn, symbol
// object, box container 싱글아이템을 여러개로 묶어서 한 박스로 관리
// function, first-class function 펑션도 변수에 할당가능 및
// parameter, return도 가능하다는것

const count = 17; // integer
const size = 17.1; // deciaml number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric value: infinity, -infinity, NaN:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 아직 적용되지않는 브라우저가 더많음
// (크롬, 파이어폭스만 가능)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`vlaue: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string);
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 같은 변수라도 다른 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true -> 동일한 스트링에 담긴
// Symbol을 같다고 처리하고 싶으면 이렇게 for을 사용하면 된다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// symbol안의 string을 보고싶다면 이렇게 description이라고 적어주면 됨

// 5. Dynamic typing: dynamically typed language 자바스크립트의 특징
// 처음부터 타입을 선언하지 않고 런타임(프로그램이 동작중에) 타입이 바뀔 수 있음.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 이러면 string 과 number형을 더하면 number을 string으로 변환
// 따라서 75의 string형태로 나오게 됩니다. 
console.log(`value: ${text}, type: ${typeof text}`); // 이렇게 나옴
text = '8' / '2'; // 숫자를 연산가능한 나누기연산자 그리고 스트링값이 숫자
// 이러면 8/2 = 4, 즉 4의 number연산자를 가지게 된다.
console.log(`value: ${text}, type: ${typeof text}`);

// object, real-life object, data structure
const jung = { name: 'jung', age: 20 };
jung.age = 26;