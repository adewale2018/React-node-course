export default {
  createPostValidator: (req, res, next) => {
    //title
    req.check('title', 'Title must be given').notEmpty();
    req.check('title', 'Title must be between 4 to 150 characters').isLength({
      min: 4,
      max: 150
    });
    //body
    req.check('body', 'Body content must be provided').notEmpty();
    req.check('body', 'Body content must be between 4 to 2000 characters').isLength({
      min: 4,
      max: 2000
    });

      //check for errors
      const errors = req.validationErrors()
      if(errors) {
        const firstError = errors.map((error) => error.msg)[0]
          return res.status(400).json({
            error: firstError
        });
      }
    
      next();
  },
  userSignupValidator: (req, res, next) => {
    //username is not null an bewteen 4-10 characters
    req.check('username', 'Username is required').notEmpty();
    req.check('username', 'Username should be between 4 -10 characters').isLength({
      min: 4,
      max: 10
    });
    
    //email
    req.check('email', 'Email must be between 3 to 32 characters')
    .matches(/.+\@.+\..+/)
    .withMessage("Email is poorly formatted")
    .isLength({
      min: 4,
      max: 2000
    });
    
    //password
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
    .isLength({min:6})
    .withMessage('Password must be contain at least 6 characters')
    .matches(/\d/)
    .withMessage('Password  must contain at least a number')
      //check for errors
      const errors = req.validationErrors()
    if(errors) {
      const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({
          error: firstError
      });
    }

    next();
  }
  
}