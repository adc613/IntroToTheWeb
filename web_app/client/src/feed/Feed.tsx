import {FormEvent, Component, ChangeEvent} from 'react';
import {Post, getPosts, createPost} from '../api';

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
    const posts = this.state.posts.map(post => {
      return (
        <li>
          <PostComponent content={post.content} author={post.author}>
          </PostComponent>
        </li>
      );
    });

    return (
      <div>
        <ul>
          {posts}
        </ul>
        <PostForm
          createPostHandler={
            (content: string, author: string) => this.createPostHandler(content, author)}
        >
        </PostForm>
      </div>
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
      <form onSubmit={(event) => this.submitPost(event)}>
        <div>
          <label>Content</label>
          <textarea
            value={this.state.content}
            onChange={(event) => {this.setContent(event)}}
          >
          </textarea>
        </div>

        <div>
          <label>Author</label>
          <input
            type="text"
            value={this.state.author}
            onChange={(event) => {this.setAuthor(event)}}
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    );
  }

  private setContent(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      content: event.target.value,
      author: this.state.author,
    });
  }

  private setAuthor(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      content: this.state.content,
      author: event.target.value,
    });
  }
}
