const express = require('express');
const router = express.Router();
const Controller = require('../controllers/home');

router.get('/', Controller.getSet);
router.get('/form', Controller.getFormPage);
router.post('/', Controller.postUser);

module.exports = router;


