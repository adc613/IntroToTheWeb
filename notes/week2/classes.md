# Classes

Classes are the combination of variables and functions. They allow us to group
both into 1 unified class.

## Declaring a class

```ts
class Animal {
  name: string;
  heartRate: number;

  constructor(name: string, heartRate: number) {
    this.name = name;
    this.heartRate = heartRate;
  }

  introduction() {
    console.log("Hi my name is " + this.name + " and my heart rate is " + this.heartRate);
  }
}
```

There's a lot going on here. First we have the class name which is after the `class`
keyword. Then we have class properties which are our variabels associated with
the class. Class properties are declared above the `constructor`.  The `construtor`
is run everytime we create a new class. Then we have a method `introduction` a
method is just a function used on a class.


## Instantiating classes

To instantiate a class we use the `new` keyword


```ts
let charlie = new Animal("Charlie", 42);
charlie.introduction();
```
