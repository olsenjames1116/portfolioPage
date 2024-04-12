import { Schema, Types, model } from 'mongoose';

// Schema for project document in MongoDB.
const ProjectSchema = new Schema({
	name: { type: String, required: true },
	summary: { type: String, required: true },
	technologies: [{ type: Types.ObjectId, required: true }],
	images: [{ type: String, required: true }],
	sourceCode: { type: String, required: true },
	livePreview: { type: String, required: true },
});

export default model('Project', ProjectSchema);
