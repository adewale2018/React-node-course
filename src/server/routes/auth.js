import express from 'express';


import signupController from '../controllers/auth';
import ValidateRequest from '../middlewares/validateRequest';


const route = express.Router();

route.post('/signup', ValidateRequest, signupController.signup);



export default route;