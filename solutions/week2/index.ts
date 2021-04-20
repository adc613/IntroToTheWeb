// Variables
//
let bar: boolean = true;
let foo: number = 0;
let word: string = "hello";

if(bar) {
  console.log("Bar is true");
} else {
  console.log("Bar is false");
}

console.log(word);
console.log(foo);
console.log(foo + word);



// Functions
function sum(x: number, y: number) {
  return x + y;
}

let theMeaningOfLife = sum(10, 32);

console.log("The meaning of life is: " + theMeaningOfLife);


function quadratic(a: number, b: number, c: number): number {
  const theSqrt = Math.sqrt(b**2 - 4 * a * c);
  const x = (-b + theSqrt) / (2*a);
  return x;
}

console.log("The solutin to 2x^2 + 4x - 4 is: " + quadratic(2, 4, -4))



// Classes
class Animal {
  name: string;
  heartRate: number;

  constructor(name: string, heartRate: number) {
    this.heartRate = heartRate;
    this.name = name;
  }

  introduction() {
    console.log("Hello my name is " + this.name);
  }

  stateOfMind() {
    if(this.heartRate > 100) {
      console.log(this.name + " is excited");
    } else {
      console.log(this.name + " is calm");
    }
  }
}

class Person extends Animal {
  meditate() {
    this.heartRate = this.heartRate * 0.75;
  }

  run()  {
    this.heartRate = this.heartRate * 1.25;
  }
}

let megaPeter = new Person("MEGAPeter", 95);
megaPeter.introduction();
megaPeter.run();
megaPeter.stateOfMind();
megaPeter.meditate();
megaPeter.stateOfMind();




// Challenge
function fib(n: number) {
  if(n === 1)  {
    return 1;
  }
  if(n === 0) {
    return 0
  }
  return fib(n - 1) + fib(n - 2);
}

console.log("Fibnacci sequence: ");
for(let i = 0; i < 15; i++) {
  console.log(fib(i));
}
