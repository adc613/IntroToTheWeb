# Interfaces

Interfaces are an important part of TypeScript. Use can use interfaces to create
your own types that group together multiple values.

## Declaring

To declare an interface you use the `interface` keyword

```ts
interface MyFirstInterface {
  aNumber: number;
  aBoolean: boolean;
  aString: string;
}
```

Interfaces can be comprised of any number of values and each value can be any
type.


## Instantiating

To instantiate an interface you just create a new object with the same fields.


```ts
let myVariable: MyFirstInterface = {
  aNumber: 42,
  aBoolean: true,
  aString: "hello world",
}
```

## Accessing

Then to access any value on the interface you simple use the `.` operator.

```ts
console.log(myVariable.aString) // "Hello world"
```


Now try creating your own Person interface. It should have at least 1 string,
1 boolean, and 1 number. Instantiate it and print one of the fields.
