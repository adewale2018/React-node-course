
export default {

  getPosts:  (req, res) => {
    const posts = {
      posts: [
        {title: 'My life', body: 'This is the first body'},
        {title: 'My life second', body: 'This is the second body'}
      ]
    }
    res.status(200).json({
      posts: posts
    })
  }

};

