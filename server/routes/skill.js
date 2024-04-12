const express = require('express');
const router = express.Router();

const skillController = require('../controllers/skillController');

// GET all the skills from the db.
router.get('/', skillController.getSkills);

module.exports = router;
