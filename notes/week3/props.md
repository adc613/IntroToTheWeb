# Components: Props

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
