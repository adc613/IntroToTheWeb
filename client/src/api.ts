export interface Post {
  content: string;
  author: string;
  uid: number;
}

export function getPosts(): Promise<Post[]> {
  return simulateNetwork(posts);
}

export function createPost(content: string, author: string): Promise<Post[]> {
  addPostToPostsArray(content, author);
  return getPosts();
}

function simulateNetwork<T>(data: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, Math.random() * 2000);
  });
}

let posts: Post[] = [
    {uid: 1, content: 'content 1', author: "Captain Jack Sparrow"},
    {uid: 2, content: 'content 2', author: "Captain Jack Sparrow"},
    {uid: 3, content: 'content 3', author: "Captain Jack Sparrow"},
    {uid: 4, content: 'content 4', author: "Captain Jack Sparrow"},
    {uid: 5, content: 'content 5', author: "Captain Jack Sparrow"},
];

let nextUid = 0;

function addPostToPostsArray(content: string, author: string) {
  posts.push({content: content, author: author, uid: nextUid});
  nextUid = nextUid + 1;
}
