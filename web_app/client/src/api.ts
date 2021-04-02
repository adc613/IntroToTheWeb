import axios from 'axios';

const DOMAIN = "http://localhost:8080";

export declare  interface Post {
  content: string;
  author: string;
  _id: string;
}

export function getPosts(): Promise<Post[]> {
  console.log(Date.now());
  return axios.get<Post[]>(DOMAIN + '/posts').then(resp => {
    const posts:Post[] = resp.data;
    return posts
  }).catch((err) => {
    alert("Error getting posts: " + err);
    return [];
  });
}

export function createPost(content: string, author: string): Promise<Post[]> {
  return axios.post(DOMAIN + '/posts', {content, author}).then(resp => {
    return getPosts();
  }).catch((err) => {
    alert("Error creating posts: " + err);
    return getPosts();
  });
}
