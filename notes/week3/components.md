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


## Props

One cool things you can do with components is pass in inputs called **props**. This
allows you to customize components behavior for each use case.

React needs to know what type the props will be. Remember that we can define types
using an `interface`. So to use props, we will define an interface with what inputs
we want and then add that type in angled brackets when extending `React.Component`.

Then, when we add our component to the HTML, we can fill send in the inputs just like
we would specify HTML attributes.

See this all in action below:

```tsx
// This is the interface that defines the props we are taking in.
interface PostProps {
  author: string;
  content: string;
}

// Here, we are saying the type of our props is "PostProps"
class Post extends React.Component<PostProps> {
  render() {
    // Notice how we use the input from the props to change what is displayed.
    // We can access the variables by surrounding them with curly brackets: {}
    return (
      <div>
        <h6>{this.props.author}:</h6>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

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
        
        {/* Notice how we can add differnt inputs to our Post component*/}
        <Post author="Adam" content="My first post"></Post>
        <Post author="Peter" content="I like turtles."></Post>

      </header>
    </div>
  );
}
```

Try adding your own prop to Post. One suggestion would be to add a date and time
input.

## State

**State** can be used to keep track of values that change over time. Like props,
you must declare an interface for the state, and specify that interface when declaring
your component.

Unlike props, state cannot be specified when adding your component to the HTML. However,
the value of the state can be changed, unlike props.

For example we can add a `numberOfLikes` field to our state object and 
then render our component:

```tsx
interface PostProps {
  author: string;
  content: string;
}

interface PostState {
  numberOfLikes: number;
}

// When adding state, specify the state type after the props type, like here.
class Post extends React.Component<PostProps, PostState> {
  // We add a constructor to set the initial state. We also have to
  // explicitly call super() this time!
  constructor(props: PostProps) {
    super(props);
    this.state = {numberOfLikes: 0}
  }

  // Notice how we say "this.state" instead of "this.props" to access the state.
  render() {
    return (
      <div>
        <h6>{this.props.author}:</h6>
        <p>{this.props.content}</p>
        <b> Your post has {this.state.numberOfLikes} likes </b>
      </div>
    )
  }
}

// ...
```

Try adding a `numberOfDislikes` field to your state.

## Changing state

State can be changed on any component by using the `this.setState()` method.
In this example we create a function called `addLike` which increases the
`numberOfLikes` by one. We then call this function when a button is pressed.

```tsx
class Post extends React.Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {numberOfLikes: 0}
  }
  
  // We change the state here by calling setState, and sending in a
  // new state object.
  addLike() {
    this.setState({numberOfLikes: this.state.numberOfLikes + 1});
  }

  render() {
    return (
      <div>
        <h6>{this.props.author}:</h6>
        <p>{this.props.content}</p>
        <b> Your post has {this.state.numberOfLikes} likes </b>
        <button onClick={() => this.addLike()}>
          Like
        </button>
      </div>
    )
  }
}
```

Try adding a dislike button.
