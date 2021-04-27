# Components


## Creating a new component

React organizes different sections of code into components. This allows you to organize
and reuse your code. For example, if you want the same header content on all the pages
on your website, you can just create one header component instead of copying/pasting the
header code onto every page.

Components have a special class funtion called "render()". Any HTML code returned from this
function will be rendered when the component is put inside other HTML code.

To create a components you create a new TypeScript class that extends `React.Component`.

1. In src/App.tsx add this class:
```tsx
class MyFirstComponent extends React.Component {
  render() {
    return (
      <p>My First Component</p>
    )
  }
}
```
2. Then inside  your main App function. Add your component like so:

```tsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing 1, 2, 3
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyFirstComponent></MyFirstComponent>

      </header>
    </div>
  );
}
```

Note: The component name is the name of your class.

Try adding your own content to `<MyFirstComponent>`.

[Next Exercise: Learn about Props](/notes/week3/props.md)
