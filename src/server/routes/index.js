import express from 'express';


import authController from '../controllers/auth';
import postController from '../controllers/postController';
import ValidateRequest from '../middlewares/validateRequest';

const route = express.Router();


route.get('/posts', postController.getPosts);
route.post('/post', ValidateRequest, postController.createPost);
route.post('/signup', ValidateRequest, authController.signup);
route.post('/signin', authController.signin);


export default route;