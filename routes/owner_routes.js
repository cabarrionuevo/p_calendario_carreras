const express = require('express');

let ownerController = require('../controllers/owners');

let router = express.Router();

router.route('/owners/index').get(ownerController.index);
router.route('/owners/search')
    .get(ownerController.search);
router.route('/owners/show')
    .post(ownerController.show);
router.route('/owners/new').get(ownerController.new);
router.route('/owners/:id')    
    .put(ownerController.update)
    .delete(ownerController.destroy)
router.route('/owners').post(ownerController.create);

module.exports = router;