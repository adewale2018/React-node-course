import Post from '../model/posts';

export default {

  getPosts:  (req, res) => {
    Post.find().select('_id title body')
    .then((posts) => {
      res.status(200).json({
        posts
      })
    }) 
    .catch((err) => {
      console.log(err);
    });
  },
  createPost: (req, res) => {
    const post = new Post(req.body);
    post.save()
    .then(result => {
      res.status(201).json({
        post: result
      });
    });
  }

};

