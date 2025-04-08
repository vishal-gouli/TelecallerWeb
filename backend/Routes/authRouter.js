let express = require('express');
let {signupValidation,loginValidation} = require('../Moddlewares/authMiddleware')
const {signUp,login} = require('../Controllers/authController');

let router = express.Router();

// router.post('/login',loginValidation,login);
// router.post('/signup',signupValidation,signUp)


module.exports = router;