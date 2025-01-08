let arr = [1, 2, 3, 4];
console.log(arr.map(i => i * 2));


// map form array obj
let users = [
    { name: 'Anuj', age: 25 },
    { name: 'seth', age: 30 },
    { name: 'Anurag', age: 35 }
];
  
let names = users.map(user => user.name);
console.log(names); 


// Adding a Property to Objects - todo


// parsing string to numbers
let arr2 = ['1', '2', 'a']
let arr3 = arr2.map(num => parseInt(num))
console.log(arr3)


let numbers = ['1', '2', '3', '4'];
let numbers1 = numbers.map(num => parseInt(num));
console.log(numbers1);


// conditional map
let marks = [35, 40, 60, 24, 55]
let grades = marks.map(num => num>38? 'pass' : 'fail')
console.log(grades)

