// Q- What is the polymorphism?

// Ans- Polymorphism is nothing but assigning behaviour
// or value in a subclass to somthing that was already
// declared in the main class. Simply polymorphism takes
// more than one form.

// JavaScript mein polymorphism ek programming concept hai jo
// aapko ek interface ya method ko multiple ways se implement
// karne ki anumati deta hai. Yani ek hi cheez ko alag-alag
// tarike se use kar sakte hain, lekin woh alag-alag tarike
// se kaam karega.

// JavaScript mein polymorphism mainly method overriding se achieve kiya jaata hai.

// Method Overriding:

class Animal {
  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof woof");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow meow");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();
