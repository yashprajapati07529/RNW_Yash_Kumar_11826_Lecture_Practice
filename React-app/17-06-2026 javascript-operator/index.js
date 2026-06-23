
// Javascript Rest Operator (...)
// The Rest Operator collects multiple element into a single array.
// Function Parameter

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 10);
}

console.log(sum(10, 20, 30, 40));

// First Element and Remaining Element

const [first, second, ...others] = [10, 20, 30, 40, 50]

console.log(first);
console.log(second);
console.log(others);

// Object Destructuring

const student = {
    name: "Vivek",
    age: 28,
    city: "Surat"
}

const { name, age, city } = student

console.log(name);
console.log(city);
console.log(age);

console.log(student.name);

// Javascript Spread Operator (...)
// The Spread Operator extend arrays , objects or iterable elements.
// copy array

const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5, 6]

console.log(arr1);
console.log(arr2);

// Merge Array

const frontend = ["HTML", "CSS", "Bootstrap"]
const backend = ["Node.js", "express.js", "MongoDB"]

const fullstack = [...backend, ...frontend]

console.log(fullstack);

// Add New Element

const numbers = [10, 20, 30]

const updated = [...numbers, 40, 50]

console.log(updated);


// copy object

const students = {
    name: "Rahul",
    age: 22
}

const copy = { ...students }

console.log(copy);

// Merge Object

const basicInfo = {
    name: "Aman"
}

const extraInfo = {
    age: 25,
    city: "Surat"
}

const user = {
    ...basicInfo,
    ...extraInfo
}

console.log(user);

// Understanding Reducer (reduce())

// reduce() is used to reduce an array into a single value

/*

array.reduce((accumulator , currentValue) => {
        return accumulator
    } , initialValue)

*/

// Count Occurrences

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc
}, {})

console.log(count);


// 1. Students ka data array
const students = [
    { name: "Amit", course: "HTML", age: 22 },
    { name: "Rahul", course: "JavaScript", age: 24 },
    { name: "Anjali", course: "ReactJS", age: 21 },
    { name: "Priya", course: "NodeJS", age: 23 },
    { name: "Vikram", course: "Python", age: 25 },
    { name: "Vikash", course: "HTML", age: 20 },
    { name: "Ravi", course: "JavaScript", age: 23 },
    { name: "Aman", course: "ReactJS", age: 21 },
    { name: "Priyanka", course: "NodeJS", age: 23 },
    { name: "Vivek", course: "Python", age: 25 },
    { name: "Ankit", course: "HTML", age: 18 },
    { name: "Laxman", course: "JavaScript", age: 19 },
    { name: "Sneha", course: "ReactJS", age: 20 },
    { name: "Rohan", course: "NodeJS", age: 22 },
    { name: "Vishal", course: "Python", age: 24 }
];

const groupedStudents = students.reduce((accumulator, currentStudent) => {

    const { course, ...studentDetails } = currentStudent;

    if (!accumulator[course]) {
        accumulator[course] = [];
    }

    accumulator[course].push(studentDetails);

    return accumulator;
}, {});


console.log(groupedStudents);
