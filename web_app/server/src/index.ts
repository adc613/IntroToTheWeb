import express from 'express';
import bodyParser from 'body-parser';

const db = require('diskdb');
db.connect('./db')
  .loadCollections(['posts']);

const PORT = 8080
const app = express();
app.use(bodyParser());
var cors = require('cors');
app.use(cors());

interface Post {
  content: string;
  author: string;
}

app.get("/", (req, res) => {
  res.send("Hello Wold!");
});

app.get("/posts", (req, res) => {
  res.json(db.posts.find());
});

app.post("/posts", (req, res) => {
  const post: Post = {
    author: req.body.author,
    content: req.body.content,
  };
  res.json(db.posts.save([post]));
});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
