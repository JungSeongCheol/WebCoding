// Objects
// one of JavaScript's data types.
// a collections of related data and/or functionality
// Nearly all obejcts in JavaScript are instances of Obejct
// object = { key : value};

// const name = 'Jung';
// const age = 4;
// print(name, age);
// function print(name, age){
//     console.log(name);
//     console.log(age);
// } 파라미터 계속 적어줘야 되서 많아지면 불편 -> Object사용


// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax {}를 이용해서 object 생성
const obj2 = new Object(); // 'object constructor' - new를 이용해서 object 생성
// synatx 두가지 다 Object 만듬

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const Jung = { name: 'Jung', age: 4 }; // object생성
print(Jung);

// width JavaScirpt magic (dynamically typed language)
// can add properties later
Jung.hasJob = true; // Javascirpt는 런타임때 작동 - 그래서 뒤늦게 Property 작성해도 가능
console.log(Jung.hasJob); // 다만, 유지보수하기 힘들어지기 때문에 이렇게 사용하는것은 추천되지 않는다.

// cand delete properties later
delete Jung.hasJob; // 이것도 가능(프로퍼티 뒤늦게 삭제)
console.log(Jung.hasJob);

// 2. Computed properties (계산된 프로퍼티)
// key should be always string
console.log(Jung.name); // . 문법
console.log(Jung['name']); // 배열로서도 가능
// 실시간일때 원하는 키 값을 받을때만 [] 로사용, 나머지는 .문법사용
Jung['hasJob'] = true;
console.log(Jung.hasJob);

// function printValue(obj, key) {
//     console.log(obj.key);
// }// 이러면 undefined

function printValue(obj, key){
    console.log(obj[key]);
}

printValue(Jung, 'name');

// 3. Property value shorthand
// 키와 value의 이름이 동일하면 생략가능
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age : 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('Jung', 26);
console.log(person4);

// 4. Constructor function
function Person(name, age){
    // this {};
    this.name = name;
    this.age = age;
    // return this;
} // 이런식으로 작성된것은 javascript에 class가 없을때 사용됨
// 다른 계산을 하지않고 object만 만드는것 - 대문자로시작함

// 5. in operator: property exsitence check (key in obj)
console.log('name' in Jung);
console.log('age' in Jung);
console.log('random' in Jung);
console.log(Jung.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in Jung) {
    console.log(key);
}

// for (value of iterable) object x 배열, 배열리스트
// 와같은 iterable 을 사용합니다
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// } // 이러면 출력이 되긴함. 단지 불편함 따라서
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assing(dest, [obj1, obj2, obj3...])
const user = {name: 'Jung', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// blue big이나옴, 그이유는 키값이 같다면 뒤에나온 키값이 앞에나온 키값을 덮어써버린다. 따라서 조심해야된다