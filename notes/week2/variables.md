# Variables

## Declaration

Variables are used to store values. To use a variable first you must declare it.
You can do that by using the `let` keywords:

```ts
let meaningOfLife: number;
```

Let's break down this declaration. We're declaring a variable named `meaningOfLife`.
We're also saying this variable's type is `number`, so we can only assign numbers
(i.e. 1, 2, 3) to it.

## Assignment

Assignment is done using `=`. Once a variable is declared your free to assign any
value to it as long as it matches the type of the variable.

```ts
meaningOfLife = 42;
```

## Types

Our variable `meaningOfLife` is a number so we can only assign number to it. For
example this code will throw an error when we try to run it:

```ts
let meaningOfLife: number;
meaningOfLife = "Code is life";
```

The three most important types in TypeScript are:

* `number` - A numerical value
* `string` - A list of characters "Hello worlds" is a string
* `boolean` - true or false

## Lets see if this all works

In your TypeScript app create a new variable of each type and then print it out.
To print a variable you can use `console.log(myVariableName)` then to run your
app you run `npm run start` in the terminal.


[Next exercise: If statements](/notes/week2/if.md)
