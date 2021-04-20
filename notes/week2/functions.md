# Functions

Functions  allow us to reuse code. They can take inputs and return values.

## Declaration

To declare a function you use the `function` keyword. So lets declate a function
that takes in 2 arguments a number a and `a` number `b` and return the sum of
the two. We'll name this function `sum`

```ts
function sum(a: number, b: number) {
  return a + b;
}
```

## Calling functions

Here's how you call af function

```ts
let meaningOfLife: number;
meaningOfLife = sum(12 + 30);
console.log(meaningOfLife) // 42;
```

You might be familiar with functions `console.log` is a type of function. Functions
are called using open and closed parenthesis with the function arguments 
in the middle.


[Next exercise: Classes](/notes/week2/classes.md)

