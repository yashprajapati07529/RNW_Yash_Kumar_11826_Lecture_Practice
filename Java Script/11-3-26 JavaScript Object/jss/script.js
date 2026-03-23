//Java Script Object

// Intro

// An object is a data structure used to store key value paires.

const student = {
    Name: "Yash Kumar",
    Age: "19",
    Course: "Java Script"
}

console.log(student);


// Accessing object properties

// Dot Notation
console.log(student.Name);
console.log(student.Age);
console.log(student.Course);

// Bracket Notation
console.log(student["Name"]);
console.log(student["Age"]);
console.log(student["Course"]);

const user = {
    "First name": "Rahul",
    "Last name": "Kumar",
}

console.log(user);

console.log(user["First name"]);


// Adding and Updating properties

console.log(student);

student.gender = "male";

console.log(student);

student.Age = "25";

console.log(student);

student.height = 5.2;

console.log(student);

// delete properties

delete student.height

console.log(student);


// Object also store fuctions.

const students = {
    name: "Vishal",
    age: 20,
    course: "Career in Full Stack Web Development",
    greet: function () {
        console.log(`${this.name} age is ${this.age} years old. His course is ${this.course}. `);
    }
}

students.greet()

// Looping Through Objects

// for in loop

for (let key in student) {
    console.log(key, student[key]);
}


// Object.keys()

console.log(Object.keys(student));


Object.keys(student).forEach((key) => {
    console.log(key, student[key]);

})

// Object.values()

Object.values(student).forEach((value) => {
    console.log(value);

})

// Object.entries()

console.log(Object.entries(student));


for (let [key, value] of Object.entries(student)) {
    console.log(key, value);

}


// Nested Objects

const User = {
    name: "Hitesh",
    address: {
        city: "Surat",
        pincode: "369852"
    }
}


console.log(User.address.city);


// Array Of Objects

const users = [
    { name: "Raj", age: 25 },
    { name: "Ketan", age: 20 },
    { name: "Ronak", age: 22 },
    { name: "Tushar", age: 60 }
]


users.forEach(user => {
    console.log(user.name, user.age);
})
