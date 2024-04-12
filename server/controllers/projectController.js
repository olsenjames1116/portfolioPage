const Project = require('../models/project');
const asyncHandler = require('express-async-handler');

// Get all projects information from the db.
exports.getProjects = asyncHandler(async (req, res, next) => {
	const projects = await Project.find();

	console.log(projects);
});
