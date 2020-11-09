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