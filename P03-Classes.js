// Q- What is the class in javascript?

// Ans- A class is a simply a repersentation of a type of Object.
// It is the Blueprint/Plan/template that describe the details of
// an object.

// ⦿ For Example ⦿

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

let JunedAccount = new BankAccount("Juned Ahmad",2000);
JunedAccount.Deposit(8000);
console.log(JunedAccount);//balance 10000
JunedAccount.Withdraw(10000);
console.log(JunedAccount.balance); //0



// Note- Class ke sath Hoisting Kaam ni krti