const mongoose = require('mongoose');

// Set up mongoose connection.
mongoose.set('strictQuery', false);

main().catch((err) => {
	console.log(err);
});
async function main() {
	await mongoose.connect(process.env.DB_URI);
}
