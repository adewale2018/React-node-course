import express from 'express';
import postController from '../controllers/postController';


const route = express.Router();

route.get('/posts', postController.getPosts);
route.post('/post', postController.createPost);



export default route;