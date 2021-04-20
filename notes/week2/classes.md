# Classes

Classes are the combination of variables and functions. They also allow us to define new 
types, and how those types behave. This is useful to organize our different ideas
or sections of our code.

In this example, we want to make a type that has all the information related to
being an animal, so we'll make an `Animal` class to do that.

## Declaring a basic class

To declare a class, use the `class` keyword, followed by the name of the class, and
finally open and close brackets.

```ts
class Animal {
}
```

We can now declare a variable with the type of our class:

```ts
let charlie: Animal;
```

## Adding information to our class

Right now, our class doesn't have anything inside of it, so it's not very useful.
We can change this by adding **class variables** to our `Animal` class.

```ts
class Animal {
  name: string;
  heartRate: number;
}
```

Here, we are saying our animals have a name, and a heart rate.

## Constructing our class

Even though we have a class, we don't yet have a good way to assign our class to
a variable. To do that, we want to add a **constructor** to our class.

```ts
class Animal {
  name: string;
  heartRate: number;
  
  constructor(name: string, heartRate: number) {
    this.name = name;
    this.heartRate = heartRate;
  }
}
```

A **constructor** is a special function that is run when we first create an
instance of our class. With our constructor, we can now assign our class to
a variable using the `new` keyword.

```ts
let charlie: Animal;
charlie = new Animal("Charlie", 42);
console.log(charlie);
```

## Getting information from our class

We can access the class variables from our class using the special `.` (dot) operator.

```ts
let charlie: Animal;
charlie = new Animal("Charlie", 42);
let charlieName: string;
charlieName = charlie.name; // Gets the class variable stored in charlie.
console.log(charlieName);
```

We can change the class variables in the same way.

```ts
let charlie: Animal;
charlie = new Animal("Charlie", 42);
console.log(charlie.heartRate);
charlie.heartRate = 999; // Sets the class variable stored in charlie.
console.log(charlie.heartRate);
```

## Adding in functions

Besides just storing class variables, we can also declare functions on our class.
These functions can access the class variables by using a special `this` keyword.

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

Now, when you have a variable of the `Animal` type, you can call this function using the 
`.` (dot) operator as well.

```
let charlie: Animal = new Animal("Charlie", 42);
let danelle: Animal = new Animal("Danelle", 999);
charlie.introduction();
danelle.introduction();
```

## Try it yourself

Let's try making our own class! Let's make a class called `Mathematician`. This class will have
two class variables, `num1` and `num2`, both of the `number` type. This class will have two
class functions, `add` which will return the two numbers added together, and `subtract` which will
return the two numbers subtracted. Afterwards, make instances of your new class, and call the
class functions and log the outputs!
