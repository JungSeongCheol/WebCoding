'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

class Person {
    // constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name} hello!`);
    }
}

const Jung = new Person('Jung', 20);
console.log(Jung.name);
console.log(Jung.age);
Jung.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; // get을 선언하는 순간
        // 바로 this.age는 getter를 호출함(메모라의 데이터를 읽는게 아니라)
        // = age라고 되어있는 age는 setter를 정의하는 순간 바로 메모리의 값을 할당 x
        // setter를 호출 
    }

    get age() {
        return this._age; // 겂리턴
    }

    set age(value){
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        // 또는
        this._age = value < 0 ? 0 : value; // 값 설정
        // = value는 메모리값을 업데이트 하는게 아니라, setter를 계속 호출함
        // 따라서 무한정 반복됨
        // 그걸 방지하기위해 getter와 setter의 이름을 다른것으로 만들어야됨.
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // _age지만 .age를 사용할 수 있는이유
// 내부적으로 getter와 setter를 이용하기 때문입니다.actions

// 3. Fields (public, private)
// Too soon!
// https:
class Experiment{
    publicField = 2; // 이러면 public 외부 접근 가능
    #privatedField = 0; // 이렇게 #을 붙이게되면 private 외부 접근 불가(내부만 가능)
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static Properties and methods
// Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
// static은 Object마다 할당되는게 아니다.
// Article이란 클래스자체에 붙어있음.
// article1 불가능 Article 가능

// 상속, 다형성

// 5. Inheritance
// a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    } 
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('▲')
    }
    getArea() {
        return (this.width * this.height) / 2;
    } // 필요한 함수만 재정의 - overriding

    toString(){
        return `Triangle: color: ${this.color}`;
    } 
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle);// false
console.log(triangle instanceof Triangle);// true
console.log(triangle instanceof Shape);// true
console.log(triangle instanceof Object);// true javascript의 모든 클래스는 object를 상속한것
console.log(triangle.toString());