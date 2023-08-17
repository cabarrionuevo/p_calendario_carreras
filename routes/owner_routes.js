const express = require('express');

let ownerController = require('../controllers/owners');

let router = express.Router();

router.route('/owners/index').get(ownerController.index);
router.route('/owners/search')
    .get(ownerController.search)
    .post(ownerController.find);
router.route('/owners/new').get(ownerController.new);
router.route('/owners/update').get(ownerController.update);
router.route('/owners').post(ownerController.create);

module.exports = router;