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