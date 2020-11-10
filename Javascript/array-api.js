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
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = [];
    for (const iterator of students) {
        result.push(iterator.score);
    }
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    let result = true;
    if(students.find((student) => student.score < 50) != undefined)
        result = false;
    console.log(result);
}

// Q9. compute students' average score
{
    console.clear();
    const result = students.reduce((prev, current) => {
        console.log('--------');
        console.log(prev);
        console.log(current);
        return prev + current.score;
    }, 0); // reduce - 값을 누적시 필요. prev - index(여기서 선언한 0 부터) 리턴된 값이 들어옴, curr - 배열의 아이템을 순차적으로 출력
    console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    console.clear();
    const result = students.map((student) => student.score).join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result shold be: '45, 66, 80, 88, 90'
{
    console.clear();
    const result = students.map((student) => student.score).sort().join();
    console.log(result);
}