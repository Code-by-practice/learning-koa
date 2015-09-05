/**
 * Description: Using koa this content object.
 *
 * How to run:
 * node --harmony eg4_context_object.js
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

	this.is('json');

	this.get("Content-type");

	this.body = {
		name: "Ashwin Hegde",
		department: "Engineering"
	};

	this.status = 200;

	this.type = "application/json";

	this.set("location", "/user/Ashwin");

	this.set({
		"tag": 10748,
		"last-modified": new Date
	});

	this.redirect("https://www.github.com/hegdeashwin/learning-koa");
});

/**
 * Listen the application on port 9000 and log the console to show user on which port app is running.
 */
app.listen(9000);
console.log('koa application in listening on port 9000');