const Skill = require('../models/skill');
const asyncHandler = require('express-async-handler');

// Get all skills information from the db.
exports.getSkills = asyncHandler(async (req, res, next) => {
	const skills = await Skill.find();

	const sortedSkills = skills.sort((a, b) => {
		if (a.name.toUpperCase() < b.name.toUpperCase()) {
			return -1;
		} else {
			return 1;
		}
	});

	res.json({ skills: sortedSkills });
});
