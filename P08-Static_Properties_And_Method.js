// Q- what is Static properties and methods in JavaScript ?

// Ans-In JavaScript, static properties and methods belong to
// the class itself rather than to instances of the class.
// They are defined on the class constructor function and
// are accessible without having to create an instance of the class.
// Static properties and methods are often used for utility functions,
// constants, or other functionalities that are not tied to specific instances.

// Static Properties:

class ObjectCounter {
  static totalCount = 0;

  constructor() {
    ObjectCounter.totalCount++;
  }

  static getTotalCount() {
    return ObjectCounter.totalCount;
  }
}

const object1 = new ObjectCounter();
const object2 = new ObjectCounter();
const object3 = new ObjectCounter();

console.log(ObjectCounter.getTotalCount());



// Static Methods:
class MathUtils {
  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.multiply(4, 2)); // Output: 8
