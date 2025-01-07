// two types of prototypes i.e. object and array.
// object prototypes - provides basic methods and properties that are available to all objects.
// array prototypes - includes methods that are important for array manipulation. this extends object pototypes to add methods to specific arrays.



function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    return `Hello from person prototype ${this.name}`;
}

const person = new Person('anurag', 20);
console.log(person.hello());

// object
const obj = { name: 'anurag' };
console.log(obj.hasOwnProperty('name'));
console.log(obj.toString());

