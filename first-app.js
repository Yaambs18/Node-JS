console.log('Hello World');


// fat arrow function return product of two numbers
const productNumbers = (a, b) => a * b;

console.log(productNumbers(5, 6));

// student object
const student = {
    name: 'Yansh',
    age: 23,
    specialization: 'Btech-CS',

    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

student.greet();

// ararays
const hobbies = ['Sports', 'Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby: '+hobby));
console.log(hobbies);

// -----------
const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const updatedArray = array.map(item => {
    if(item === ' '){
        return 'empty string';
    }else{
        return item;
    }
});

console.log(updatedArray);

// spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);

// rest operator
const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4));

// destructuring

// const printname = (studentData) => {
//     console.log(studentData.name);
// }

const printName = ({ name }) => {
    console.log(name);
}
printName(student);

const {name, age} = student;
console.log(name, age);