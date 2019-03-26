
/**
 * validate - description
 * @param  {object} request the form data to be validated
 * @return {object}  {} containing error and isValid
 */
const validateRequestBody = (request) => {
  if (Object.hasOwnProperty.call(request, 'body')) {
    for (const key in request.body) {
      switch (key) {
        case 'title':
          request.check('title', 'Title field cannot be empty')
            .trim()
            .notEmpty()
            .matches(/\w/);
          request.check('title', 'Title must be between 4 and 150 characters')
            .trim()
            .isLength(4, 150);
          break;
        
        case 'body':
          request.check('body', 'Body field cannot be empty')
            .trim()
            .notEmpty()
            .matches(/\w/);
          request.check('body', 'Body must be between 4 and 2000 characters')
            .trim()
            .isLength(4, 2000);
          break;
        
        case 'email':
          request.check('email', 'Email address field cannot be empty')
            .trim()
            .notEmpty();

          request.check('email', 'Email is badly formatted')
            .trim()
            .isEmail();
          break;

        case 'password':
          request.check('password', 'Password field cannot be empty')
            .trim()
            .notEmpty();
          request.check(
            'password',
            'Password length must be more than 6 characters',
          )
            .trim()
            .isLength({ min: 7 }).matches(/\w/);
          break;

        case 'newPassword':
          request.check('newPassword', 'newPassword field cannot be empty')
            .trim()
            .notEmpty();
          request.check(
            'newPassword',
            'newPassword length must be more than 6 characters'
          )
            .trim()
            .isLength({ min: 7 }).matches(/\w/);
          break;

        case 'confirmPassword':
          request.check(
            'confirmPassword',
            'confirmPassword field cannot be empty'
          )
            .trim()
            .notEmpty();
          break;

        case 'lastName':
          request.check(
            'lastName',
            'lastname field cannot be empty'
          )
            .trim()
            .notEmpty();
          request.check('lastName', 'lastname must be more than 2 characters')
            .trim()
            .isLength(2, 50);
          request.check(
            'lastName',
            'lastname should contain only alphabets',
          )
            .trim()
            .matches(/\w/);
          break;
        
        case 'otherName':
          request.check(
            'otherName',
            'othername field cannot be empty',
          )
            .trim()
            .notEmpty();
          request.check('otherName', 'othername must be more than 2 characters')
            .trim()
            .isLength(2, 50);
          request.check(
            'otherName',
            'othername should contain only alphabets',
          )
            .trim()
            .matches(/\w/);
          break;
        case 'name':
          request.check(
            'name',
            'name field cannot be empty',
          )
            .trim()
            .notEmpty();
          request.check('name', 'name must be more than 5 characters')
            .trim()
            .isLength(5, 100);
          request.check(
            'name',
            'name should contain only alphabets',
          )
            .trim()
            .matches(/\w/);
          break;
          case 'officeName':
          request.check(
            'officeName',
            'officeName field cannot be empty',
          )
            .trim()
            .notEmpty();
          request.check('officeName', 'officeName must be more than 5 characters')
            .trim()
            .isLength(5, 100);
          request.check(
            'officeName',
            'officeName should contain only alphabets',
          )
            .trim()
            .matches(/\w/);
          break;
          case 'type':
          request.check(
            'type',
            'type field cannot be empty',
          )
            .trim()
            .notEmpty();
          request.check('type', 'type must be more than 5 characters')
            .trim()
            .isLength(5, 100);
          request.check(
            'type',
            'type should contain only alphabets',
          )
            .trim()
            .matches(/\w/);
          break;
        case 'passportUrl':
          request.check(
            'passportUrl',
            'passportUrl field cannot be empty',
          )
            .trim()
            .notEmpty();
          request.check(
            'passportUrl',
            'passportUrl must not be more than 50 characters',
          )
            .isLength({ max: 50 });
          request.check(
            'passportUrl',
            'passportUrl should contain only alphabets',
          )
            .trim()
            .matches(/\w/);
          break;
        
        case 'logoUrl':
          request.check(
            'logoUrl',
            'logoUrl field cannot be empty',
          )
            .trim()
            .notEmpty();
          request.check(
            'logoUrl',
            'logoUrl must not be more than 50 characters',
          )
            .isLength({ max: 50 });
          request.check(
            'logoUrl',
            'logoUrl should contain only alphabets',
          )
            .trim()
            .matches(/\w/);
          break;

        case 'hqAddress':
          request.check('hqAddress', 'hqAddress field cannot be empty')
            .trim()
            .notEmpty();
          request.check(
            'hqAddress',
            'hqAddress length must be more than 6 characters',
          )
            .trim()
            .isLength({ max: 100 });
          break;

        case 'phoneNumber':
          request.check(
            'phoneNumber',
            'phoneNumber field cannot be empty',
          )
            .trim()
            .notEmpty();
          request.check(
            'phoneNumber',
            'phoneNumber should be 11 characters',
          )
            .isLength({ min: 11 })
            .isLength({ max: 11 });
          break;
        default:
      }
    }
  }
  return request.validationErrors();
};

/**
 * @description This validates all request inputs
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @function  validateRequest
 * @return {object} return object containing validation error message
 */
const validateRequest = (req, res, next) => {
  const errors = validateRequestBody(req);
  if (errors) {
    const message = errors[0].msg;
    res.status(400).json({ error: message, success: false });
  } else {
    next();
  }
};

export default validateRequest;