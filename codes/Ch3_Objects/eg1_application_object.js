/**
 * Description: Using koa application object.
 *
 * How to run:
 * node --harmony eg1_application_object.js
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
 * 2nd way the koa application object; include export
 */
// var koa = require('koa');
// var app = module.exports = koa();

/**
 * 3rd way the koa application object;
 */
// var app = module.exports = require('koa')();

var logger = require('koa-logger');

/**
 * Using middleware with koa
 * app.use(<middleware-setup>);
 */

app.use(logger());
app.use(function *() {
	this.body = "Hello World!";
});

/**
 * Listen the application on port 9000 and log the console to show user on which port app is running.
 */
app.listen(9000);
console.log("koa application in listening on port 9000");