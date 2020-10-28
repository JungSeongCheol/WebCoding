// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';
console.log(age);
// 2. Variable
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

// 3. Contants
// favor immutable data type always for a few reason:
// - security
// - thread safty
// - reduce human mistakes 왠만하면 값이 바뀔 필요가 없다면 const로 정의하는게 좋다.
const daysInWeek = 7;
const maxNumber = 5;

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
