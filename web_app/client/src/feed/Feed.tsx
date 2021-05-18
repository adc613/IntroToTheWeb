import {FormEvent, Component, ChangeEvent} from 'react';
import {Post, getPosts, createPost} from '../api';
import adamHead from "../icons/AdamHead.jpeg"
import peterHead from "../icons/PeterHead.jpeg"

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
    getPosts().then(posts => {
      this.setState({
        ...this.state,
        isLoading: false,
        posts: posts,
      });
    });
  }

  createPostHandler(content: string, author: string) {
    this.setState({
      isLoading: true,
      posts: this.state.posts,
    });
    createPost(content, author).then((newPosts: Post[]) => {
      this.setState({
        isLoading: false,
        posts: newPosts,
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
    const posts = this.state.posts.reverse().map(post => {
      return (
        <div>
          <PostComponent content={post.content} author={post.author}>
          </PostComponent>
        </div>
      );
    });

    return (
      <div className="mainBody">
        <PostForm
          createPostHandler={
            (content: string, author: string) => this.createPostHandler(content, author)}
        >
        </PostForm>
        <hr />
        {posts}
      </div>
    );
  }

  private renderLoader() {
    return (
      <div className="mainBody">
        <h1>Loading....</h1>
      </div>
    );
  }
}

interface PostComponentProps {
  content: string;
  author: string;
}

class PostComponent extends Component<PostComponentProps, {}> {

  chooseWhichHead() {
    if (this.props.author === "Peter") {
      return peterHead;
    } else {
      return adamHead;
    }
  }

  render() {
    return (
      <div>
        <div>
          <img src = {this.chooseWhichHead()} height="50px"/>&nbsp;&nbsp;
          {this.props.author}
        </div>
        <p className="postBody">{this.props.content}</p>
        <hr />
      </div>
    );
  }
}

type PostHandler = (content: string, author: string) => void;

interface PostFormProps {
  createPostHandler: PostHandler;
}

interface PostFormState {
  content: string;
  author: string;
}

class PostForm extends Component<PostFormProps, PostFormState> {
  constructor(props: PostFormProps) {
    super(props);
    this.state = {
      content: '',
      author: '',
    };
  }

  submitPost(event: FormEvent<HTMLFormElement>) {
    event.stopPropagation();
    event.preventDefault();
    this.props.createPostHandler(this.state.content, this.state.author);
    this.setState({
      content: '',
      author: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submitPost(event)}>
          <div>
            <textarea
              id="contentTextarea"
              value={this.state.content}
              placeholder="Create a new post..."
              onChange={(event) => {this.setContent(event)}}
            >
            </textarea>
          </div>

          <div>
            <label>Who's posting? </label>
            <select
              value={this.state.author}
              onChange={(event) => {this.setAuthor(event)}}
            >
              <option value="Adam">Adam</option>
              <option value="Peter">Peter</option>
            </select>
            <button id="postButton" type="submit">Post</button>
          </div>
        </form>
      </div>
    );
  }

  private setContent(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      content: event.target.value,
      author: this.state.author,
    });
  }

  private setAuthor(event: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      content: this.state.content,
      author: event.target.value,
    });
  }
}
