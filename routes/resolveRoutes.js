const express = require('express');
const ResolveController = require('../controllers/resolveController');

const router = express.Router();

router.get('/resolve/:id', ResolveController.resolve);

module.exports = router;
