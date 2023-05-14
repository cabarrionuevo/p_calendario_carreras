const express = require('express');

let userControler = require('../controllers/users');
let router = express.Router();

router.get('/users/singup',userControler.new);
router.post('/users',userControler.create);

module.exports = router;
