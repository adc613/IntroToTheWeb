import React from 'react';
import logo from './logo.svg';
import './App.css';

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

class MyFirstComponent extends React.Component {
  render() {
    return (
      <p>My First Component</p>
    )
  }
}
interface PostProps {
  content: string;
  author: string;
}


interface PostState {
  numberOfLikes: number;
}

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

export default App;
