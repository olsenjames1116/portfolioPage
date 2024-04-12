const Skill = require('../models/skill');
const asyncHandler = require('express-async-handler');

// Get all skills information from the db.
exports.getSkills = asyncHandler(async (req, res, next) => {
	const skills = await Skill.find();

	console.log(skills);
});
