const { Schema, model } = require('mongoose');

// Schema for skills displayed in about section from MongoDB.
const SkillSchema = new Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
});

module.exports = model('Skill', SkillSchema);
