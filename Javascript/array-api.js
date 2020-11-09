// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const array = fruits.toString();
    console.log(array);
    console.log(typeof array);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const array = fruits.split(',');
    console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
{
    for (const iterator of students) {
        if(iterator.score === 90) console.log(iterator.name);
    }
}

// 06. make an array of enrolled students