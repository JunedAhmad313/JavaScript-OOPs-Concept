// Q-What is inheritance in JavaScript?

// Ans- Inheritance is a concept where a class shares the structure 
// and behaviour defined in other class.If inheritance applied in one
// class is called single inheritance,and if it depends on multiple
// class, then it is called multiple inheitance.


// ⦿ Example with class based inheritance ⦿

class BankAccount {

    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName,balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    }

    Deposit(amount){
        this.balance += amount;
    }
    Withdraw(amount){
        this.balance -= amount;
    }
}

class CurrentAccount extends BankAccount {
      transactionLimit = 50000;

      constructor(customerName,balance=0){
        super(customerName,balance);
      }

      takeBusinessLoan(amount){
        console.log(" Taking business loan : " +  amount );
      }
}

class SavingAccount extends BankAccount {
    transactionLimit = 100000;

    constructor(customerName,balance=0){
      super(customerName,balance);
    }

    takePersonalLoan(amount){
      console.log(" Taking business loan : " +  amount );
    }
}

const JunedAccount = new SavingAccount('Juned Ahmad',20000);
JunedAccount.Deposit(80000);
JunedAccount.Withdraw(100000);
JunedAccount.takePersonalLoan(5000);
console.log(JunedAccount);



// ⦿ Example with Prototype inheritance ⦿

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan: ' + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan: ' + amount);
// };

// const JunedAccount = new SavingAccount('Juned Ahmad', 500);
// JunedAccount.deposit(500);
// JunedAccount.withdraw(100);
// JunedAccount.takePersonalLoan(40000);
// console.log(JunedAccount);







