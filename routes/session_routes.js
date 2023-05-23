const express = require('express');

let sessionController = require('../controllers/sessions');

let router = express.Router();

router.route('/sessions')
    .get(sessionController.new)
    .post(sessionController.create);

module.exports = router;

