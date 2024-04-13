const { Schema, Types, model } = require('mongoose');

// Schema for project document in MongoDB.
const ProjectSchema = new Schema({
	name: { type: String, required: true },
	summary: { type: String, required: true },
	technologies: [{ type: Types.ObjectId, required: true }],
	images: [{ type: String, required: true }],
	sourceCode: { type: String, required: true },
	livePreview: { type: String, required: true },
	priority: { type: Number, required: true },
});

module.exports = model('Project', ProjectSchema);
