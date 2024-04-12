var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Generic error handler.
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong');
});

// Listen on port when server is started.
app.listen(port, () => {
	const url =
		process.env.NODE_ENV === 'production'
			? 'https://api.whisk-recipes.com'
			: `http://localhost:${port}`;
	console.log(`Server running at ${url}`);
});

module.exports = app;
