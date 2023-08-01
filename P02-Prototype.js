// Q- What is the prototyope in javascript?

// Ans-  A Prototype is an existing inbuilt Functionality
// in javaScript. A Prototype is an object where it can add
// new varriables and methodes to existing object?

// Let's create a constructor function for a basic object called 'BankAccount'
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.customerAccount = Date.now();
  this.balance = balance;
}

// Defining methods using prototype to improve performance
BankAccount.prototype.Deposite = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.Withdraw = function (amount) {
  this.balance -= amount;
};

// Creating an instance of BankAccount
let jainAccount = new BankAccount("Jain", 500);

console.log(jainAccount);
// Output: { customerName: 'Jain', customerAccount: <timestamp>, balance: 500 }

jainAccount.Deposite(2346790);
console.log(jainAccount.balance);
// Output: 2347290 (500 + 2346790)

jainAccount.Withdraw(2347290);
console.log(jainAccount.balance);
// Output: 0 (2347290 - 2347290)


// ⦿ Another  Example ⦿


// Let's create a constructor function for a basic object called 'Person'
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Now, let's add a method to the prototype of the 'Person' object
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Now, let's create two instances of the 'Person' object
const person1 = new Person("Kaluwa", 24);
const person2 = new Person("Saim", 30);

// Both 'person1' and 'person2' will have access to the 'sayHello' method
person1.sayHello(); // Output: Hello, my name is Kaluwa and I am 24 years old.
person2.sayHello(); // Output: Hello, my name is Saim and I am 30 years old.



       

      
      