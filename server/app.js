require('dotenv').config();
require('./utils/mongodb');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const projectRouter = require('./routes/project');
const skillRouter = require('./routes/skill');

var app = express();
const port = process.env.PORT || 3000;

app.use(
	cors({
		origin: ['http://localhost:5173', 'https://www.jamesolsenwebdev.com/'],
	})
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/projects', projectRouter);
app.use('/skills', skillRouter);

// Generic error handler.
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong');
});

// Listen on port when server is started.
app.listen(port, () => {
	const url =
		process.env.NODE_ENV === 'production'
			? 'https://api.jamesolsenwebdev.com/'
			: `http://localhost:${port}`;
	console.log(`Server running at ${url}`);
});

module.exports = app;
