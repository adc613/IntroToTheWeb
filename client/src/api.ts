export interface Post {
  content: string;
  author: string;
  uid: number;
}

export function getPost(): Promise<Post[]> {
  return Promise.resolve([
    {uid: 1, content: 'content 1', author: "Captain Jack Sparrow"},
    {uid: 2, content: 'content 2', author: "Captain Jack Sparrow"},
    {uid: 3, content: 'content 3', author: "Captain Jack Sparrow"},
    {uid: 4, content: 'content 4', author: "Captain Jack Sparrow"},
    {uid: 5, content: 'content 5', author: "Captain Jack Sparrow"},
  ]);
}
