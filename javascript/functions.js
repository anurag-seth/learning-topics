// function declaration
function hello(name) {
    console.log("helllooo", name);
}
hello('anurag');


// function expression
const printMessage = function(name){
    return `helloo ${name}`;
}
console.log(printMessage('anurag'));


// arror functions
const helloUser = (name) => {
    console.log("hello", name);
}
helloUser('anurag')


// function constructor
const user = new Function('name', 'return `Hello, ${name}!`;');
console.log(user('Anurag'));


// method in an object
const person = {
    name: 'Anurag',
    greet: function() {
      return `Hello, ${this.name}!`;
    }
};
console.log(person.greet());