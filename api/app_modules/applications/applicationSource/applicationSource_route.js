const express = require('express');
const router = express.Router();
const controller = require('./applicationSource_controller')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.post('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router