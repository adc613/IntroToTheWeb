# Functions

Functions  allow us to reuse code. They can take inputs and return values.

## Declaration

To declare a function you use the `function` keyword. So let's declate a function
that takes in 2 arguments: number `a` number `b`, and returns the sum of
the two numbers. We'll name this function `sum`

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

## Calling functions

Functions are called by typing their name and then adding the function arguments,
or inputs, inside parentheses after the function name. Here's an example of calling
the function we declared above.

```ts
let meaningOfLife: number;
meaningOfLife = sum(12, 30);
console.log(meaningOfLife); // This should output 42
```

Some functions are already built into typescript. One such function we have already been using
is `console.log`, which prints out the input to the terminal.

## Try it yourself

As an exercise, can you create a function called `logIf`? This function should take in a `boolean`
and a `string`, as arguments, and should print the string to the console only if the `boolean` argument
is true. Then call the function with different inputs!

[Next exercise: Interfaces](/notes/week2/interfaces.md)

