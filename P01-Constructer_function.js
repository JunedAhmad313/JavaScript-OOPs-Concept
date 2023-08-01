// Q- What is the constructor in JavaScript ?

// Ans-A constructor in JavaScript is a special function used to create
// and initialize objects. It is typically defined as part of a class or
// a constructor function. When you create a new instance of an object using
// the new keyword, the constructor function is called, and it sets up the
//  object's properties and methods.

// ⦿ For Example ⦿

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now(); // Generating a unique account number based on the current timestamp
  this.balance = balance;

  this.Deposite = function (amount) {
    this.balance += amount;
  };

  this.Withdraw = function (amount) {
    this.balance -= amount;
  };
}

// Creating instances of BankAccount
const JunedAccount = new BankAccount("Juned Ahmad", 1000);
const SurbhiAccount = new BankAccount("Surbhi Verma", 10000);

console.log(JunedAccount.customerName); // Output: Juned Ahmad
console.log(SurbhiAccount); // Output: { customerName: 'Surbhi Verma', accountNumber: <timestamp>, balance: 10000, deposite: [Function], Withdraw: [Function] }

JunedAccount.Deposite(2346790);
console.log(JunedAccount.balance); // Output: 2347790

JunedAccount.Withdraw(2347790);
console.log(JunedAccount.balance); // Output: 0





// Ji haan, jab JavaScript me classes introduce nahi kiye gaye the,
// tab constructor functions hi object-oriented programming ka use karte the.

// Constructor functions JavaScript me objects ko create karne ke liye use hoti thi,
// aur isse prototype-based inheritance ka istemal hota tha. Ye functions blueprint
// ki tarah kaam karti thi, jinka naam usually capitalized hota tha taki ise constructor
// function samjha ja sake.

// Isme "this" keyword ka istemal hota tha, jisse object ke properties aur methods ko set kiya ja sakta tha.
// Prototype chain ke through, ek object apne constructor function ke prototype se methods inherit kar sakta tha.
