This is a sample of a posts page component. Feel free to reference this page in your implementation.
However, you should add more content in your posts than just a string field.

```typescript
interface Post {
  content: String
}

interface PostPageState {
  posts: Post[];
}
 
class PostPage extends React.Component<{}, PostPageState> {
  constructor({}) {
    super({});
    this.state = {
      posts: [{content: "existing post"}],
    };
  }
  submitPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedContent = event.currentTarget.contentField.value;
    this.setState({
      posts: [...this.state.posts, {content: event.currentTarget.contentField.value}],
    });
    event.currentTarget.contentField.value = '';
  }
 
  render() {
    return (
      <div className="App">
        <h1>Sample Post page:</h1>
        
        {this.state.posts.map(post => <p>{post.content}</p>)}
 
        <form onSubmit={e => this.submitPost(e)}>
          <input name="contentField" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
```
