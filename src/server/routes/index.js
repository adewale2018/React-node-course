import express from 'express';
import postController from '../controllers/postController';


const route = express.Router();

route.get('/', postController.getPosts);



export default route;