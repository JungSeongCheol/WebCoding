// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const array = fruits.join(',');
    console.log(array);
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
    console.log(array);
}

// Q4. make new array without the first two elements
// make - splice 사용 불가능
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // slice는 array 에 변동은 주지 않음(splice와 다르게)
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
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 06. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// resutl should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result); // 배열안에 있는 데이터를 콜백 함수를 통해 다른 데이터로 변경하는 메서드 map
    // callback함수 인자는 이해하기 쉬운것을 사용해야한다.
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50); // some 하나의 조건을 찾음 (하나라도 있으면 true)
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); //every 모든 조건을 찾음 (하나라도 있으면 false)
    console.log(result2);
}

// Q9. compute students' average score
{
    console.log();
    const result = students.reduce((prev, current) => prev + current.score, 0); // reduce - 값을 누적시 필요. prev - index(여기서 선언한 0 부터) 리턴된 값이 들어옴, curr - 배열의 아이템을 순차적으로 출력
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    console.clear();
    const result = students.map((student) => student.score).filter(score => score >= 50).join(); // 50점 이상인것만 사용됨
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result shold be: '45, 66, 80, 88, 90'
{
    console.clear();
    const result = students.map((student) => student.score).sort((a, b) => a - b).join();
    console.log(result);
}