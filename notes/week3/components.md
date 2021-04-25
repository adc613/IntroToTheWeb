# Components


## Creating a new component

To create a components you create a new TypeScript class that extends `React.Copmonent`.

1. In src/App.tsx add this class:
  ```typescript
  class MyFirstComponent extends React.Component {
    render() {
      return (
        <p>My First Component</p>
      )
    }
  }
  ```
1. Then inside  your main App function. Add your component like so:

```
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


## Props

One cool things you can do with components is pass in inputs called props. This
allows you to reuse components and customize their behavior for each use case.

```typescript
interface PostProps {
  content: string;
  author: stirng;
}

class Post extends React.Component<PostProps> {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <h6>{this.props.author}</h6>
      </div>
    )
  }
}


// ...

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

        <Post author="Adam" content="My first post"></Post>

      </header>
    </div>
  );
}
```

## State

State can be used to keep track of things


```typescript
interface PostProps {
  content: string;
  author: string;
}

interface PostState {
  content: string;
  author: string;
}

class Post extends React.Component<PostProps, PostState> {
  constructor() {
    super();
    this.state = {numberOfLikes: 0}
  }

  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <h6>{this.props.author}</h6>
        <b> Your post has {this.state.numberOfLikes} likes </b>
      </div>
    )
  }
}

export default App;
```

## Changing state


```typescript
class Post extends React.Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {numberOfLikes: 0}
  }

  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <h6>{this.props.author}</h6>
        <b> Your post has {this.state.numberOfLikes} likes </b>
        <button
          onClick={() => this.setState({numberOfLikes: this.state.numberOfLikes + 1})}
        >
          Like
        </button>
      </div>
    )
  }
}
```
