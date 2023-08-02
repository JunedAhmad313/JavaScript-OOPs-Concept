// Q- What is Encapsulation in JavaScript?

// Ans - Encapsulation is the Process of binding Each Data members
// and method of a program together to do a specific Job without
// revelling unnecessary details.

// ⦿ Example with class based Encapsulation ⦿

class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  #calculateInterest(amount) {
    console.log("Calculating  Rate of interest at amount ");
  }

  takeBusinessLoan(amount) {
    // Logic
    this.#calculateInterest(amount);
    console.log("Taking business loan: " + amount);
  }
}

const JunedAccount = new CurrentAccount("JUNED KHAN", 786);
JunedAccount.withdraw(400);
// JunedAccount.balance = 5000;
JunedAccount.takeBusinessLoan(500023);
console.log(JunedAccount.balance);

const rakeshAccount = new CurrentAccount("Rakesh K", 2000);
// rakeshAccount.setBalance(400);
// rakeshAccount.balance = 100000000;
rakeshAccount.takeBusinessLoan(40000);
console.log(rakeshAccount.balance);

// Javascript me encapsulation ek programming concept hai jisse data aur
// uske related functions ko ek container me bandh kar rakha jata hai,
// taki unka access controlled ho. Isse data ki privacy aur security
// maintain hoti hai. Ye OOP (Object-Oriented Programming) principle ka
// ek hissa hai jisse classes aur objects ke through achieve kiya jata hai.
