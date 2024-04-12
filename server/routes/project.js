const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');

// GET all projects from the db.
router.get('/', projectController.getProjects);

module.exports = router;
