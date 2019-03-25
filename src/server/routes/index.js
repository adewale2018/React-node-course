import express from 'express';


import postController from '../controllers/postController';
import VaidateRequest from '../middlewares/validateRequest';


const route = express.Router();

route.get('/posts', postController.getPosts);
route.post('/post', VaidateRequest, postController.createPost);



export default route;