import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/post">
              <Post author="Adam" content="My first post"></Post>
            </Route>
            <Route path="/">
              <MyFirstComponent></MyFirstComponent>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

class MyFirstComponent extends React.Component {
  render() {
    return (
      <div>
        <p>My First Component</p>
        <Link to="/post"> Go to post </Link>
      </div>
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
        <Link to="/"> Go to home </Link>
      </div>
    )
  }
}

export default App;
