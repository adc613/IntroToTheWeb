# If statements

If statements allow you to make your application "smart" by conditionally
executing one of 2 blocks of code.

```ts
let isPeterHonest: boolean = true;
if(isPeterHonest) {
  console.log("My first if statement");
  console.log("Peter is an honest person");
}
```

This block of code will only print "Peter is an honest perosn" when `isPeterHonest`
is equal to true. If `isPeterHonest` is false nothing will happen.


## If-Else statement

`if` can be paired with `else` to write if-else statments. In an if-else statement
the else block will run in the event that the condition is false.

```ts
let ageOfPeter: number = 102;
if(ageOfPeter < 21) {
  console.log("Peter is not allowed to drink");
} else {
  console.log("Peter is allowed to legally drink alcohol");
}
```

In this case Peter will be allowed to drink alcohol.

[Next exercise: Functions](/notes/week2/functions.md)
