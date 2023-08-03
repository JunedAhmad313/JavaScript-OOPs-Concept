// Q- What is abstraction in JavaScript ?

// Ans-Abstraction is a useful features of Oops 
// and it Shows only Necessary details to the client 
// of an object.means it shows only required details 
// of an object Not inner construction of an objects.

// JavaScript me, abstraction ek programming concept hai
// jo aapko complex details chhupane aur sirf essential
// information ko dikhaane me madad karti hai. Abstraction
// se aap ek object ya concept ke essential characteristics
// aur functionalities ko highlight kar sakte hain aur baaki
// unnecessary details ko chhupa sakte hain.


class Car {
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate(){
       this.speed +=50;
       console.log(`${this.make} ${this.model} is accelerating. Speed: ${this.speed} km/h`);
    }

    brake(){
        this.speed -= 30;
        console.log(`${this.make} ${this.model} is braking. Speed: ${this.speed} km/h`);  
    }
}

const myCar = new Car('Mahindra','Thar');
myCar.accelerate();
myCar.brake();

