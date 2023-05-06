const express = require('express');

let ownerController = require('../controllers/owners');

let router = express.Router();

router.route('/owners/new').get(ownerController.new);
router.route('/owners').post(ownerController.create);

module.exports = router;