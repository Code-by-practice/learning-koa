/**
 * Description: Using koa HTTP response object.
 *
 * How to run:
 * node --harmony eg3_response_object.js
 * Open browser -> localhost:9000
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

'use strict';

/**
 * 1st way the koa application object;
 */
var koa = require('koa');
var app = koa();

/**
 * Using middleware with koa
 * app.use(<middleware-setup>);
 */
app.use(function*() {

	/**
	 * Properties of response object.
	 */
	this.response.body = {
		name: "Ashwin Hegde",
		department: "Engineering"
	};

	this.response.status = 200;

	this.response.type = "application/json";

	/**
	 * Response functions
	 */
	
	this.response.set("location", "/user/Ashwin");

	this.response.set({
		"tag": 10748,
		"last-modified": new Date
	});

	this.response.redirect("https://www.github.com/hegdeashwin/learning-koa");
});

/**
 * Listen the application on port 9000 and log the console to show user on which port app is running.
 */
app.listen(9000);
console.log('koa application in listening on port 9000');