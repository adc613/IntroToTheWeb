This is a sample of an image uploading component you can add to your site. This is optional to add - so no pressure!

```typescript
interface ImageUploadState {
  imageSrc: string;
}

class ImageUpload extends Component<{}, ImageUploadState> {
  reader = new FileReader();

  constructor({}) {
    super({});
    this.state = {image: ""}
    this.reader.onload = this.readerOnLoad.bind(this);
  }

  readerOnLoad(event: ProgressEvent<FileReader>) {
    if (event && event.target && event.target.result) {
      this.setState({imageSrc: event.target.result as string});
    }
  }

  handlePictureUpload(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files.item(0)!;
      this.reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div>
        <input type="file" accept="image/*" onChange={(event) => this.handlePictureUpload(event)} multiple = {false} />
        <img src = {this.state.imageSrc}></img>
      </div>
    );
  }
}
```
