const { Router } = require('express');
const router = Router();
const { register, login } = require('../controllers/register');
router.route('/register').post(register);
router.route('/login').post(login);
module.exports = router;
