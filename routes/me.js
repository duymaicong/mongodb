const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');
router.get('/stored/courses',meController.storeCourse);
router.post('/stored/courses',meController.storeCourse1);

module.exports= router;