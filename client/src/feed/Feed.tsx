import {Component} from 'react';
import {Post, getPost} from '../api';

interface FeedState {
  isLoading: boolean;
  posts: Post[];
}

export class Feed extends Component<{}, FeedState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isLoading: true,
      posts: [],
    };
    getPost().then(posts => {
      this.setState({
        ...this.state,
        isLoading: false,
        posts: posts,
      });
    });
  }

  render() {
    if(this.state.isLoading) {
      return this.renderLoader();
    } else {
      return this.renderPosts();
    }
  }

  private renderPosts() {
    const posts = this.state.posts.map(post => {
      return (
        <li>
          <PostComponent content={post.content} author={post.author}>
          </PostComponent>
        </li>
      );
    });

    return (
      <ul>
        {posts}
      </ul>
    );
  }

  private renderLoader() {
    return <h1>Loading....</h1>
  }
}

interface PostComponentProps {
  content: string;
  author: string;
}

class PostComponent extends Component<PostComponentProps, {}> {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <h2>{this.props.author}</h2>
      </div>
    );
  }
}
