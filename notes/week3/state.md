# Components: State

**State** can be used to keep track of values that change over time. Like props,
you must declare an interface for the state, and specify that interface when declaring
your component.

Unlike props, state cannot be specified when adding your component to the HTML, but
the value of the state can be changed, which allows our site to be more interactive!

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
