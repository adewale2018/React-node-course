import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import User from '../model/users';


export default {
  signup: async (req, res) => {
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403).json({
      error: 'Sorry, the email is already exist!'
    });
    const user = await new User(req.body)
    await user.save()
    res.status(200).json({
      message: 'Sign up successfully, please go ahead and login!'
    });
  },
  signin:  (req, res) => {
    const { email, password } =  req.body;
    // find the user based on the email
    User.findOne({ email }, (err, user) => {
      // if error or no user
      if(err || !user){
        return res.status(401).json({
          error: "User with that email does not exist, please sign up first!"
        });
      }
      //if user is found, make sure the email and password match
      //create authenticate method in the model and then use it here
      if(!user.authenticate(password)) {
        return res.status(401).json({
          error: "Email and password do not match"
        });
      }
      //generate a token with user id and secret
      const token = jwt.sign(
        {_id: user._id}, 
        process.env.JWT_SECRET
      );
      //persist the token as 't' in cookie with expiry date 
      res.cookie("t", token, {expire: new Date() + 9999});
      // return response with user and the token to front end client
      const { _id, username, email } = user;
      return res.json({token, user: { _id, email, username }}); 
    });
  }
}
