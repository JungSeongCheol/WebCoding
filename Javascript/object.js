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

Jung.hasJob = true; // Javascirpt는 런타임때 작동 - 그래서 뒤늦게 Property 작성해도 가능
console.log(Jung.hasJob); // 다만, 유지보수하기 힘들어지기 때문에 이렇게 사용하는것은 추천되지 않는다.

delete Jung.hasJob; // 이것도 가능(프로퍼티 뒤늦게 삭제)
console.log(Jung.hasJob);

// 2. Computed properties