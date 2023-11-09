const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();
const { getAll,post,update,delet, getById,register,login} = require('../controllers/user.controllers');
const tokenVerification = require('../middlewares/tokenVerification');

router.get('/getAll', getAll)
.get('/getById/:id', getById)
.post('/post', post)
.post('/register', [ check('email').isEmail(), check('password').isLength({ min: 6 }).withMessage('The password must be at least 8 letters'), ], register).post('/login',tokenVerification, login)
.put('/put/:id', update)
.delete('/delete/:id', delet);

module.exports = router;