import express from 'express';


import signupController from '../controllers/auth';
// import VaidateRequest from '../middlewares/validateRequest';


const route = express.Router();

route.post('/signup', signupController.signup);



export default route;