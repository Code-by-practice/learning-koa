/**
 * Description: Use of middleware with koa.
 *
 * How to run:
 * node --harmony eg1_hello-world.js
 * Open browser -> localhost:9000/user/<your-name>
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

'use strict';

var koa = require('koa');

/**
 * Invoke the koa function; which can be use to define middleware.
 */
var app = koa();

/**
 * Require middlewares; to manage your REST routes & body parse;
 */
var route = require('koa-route');
var parse = require('co-body');

/**
 * Syntax:
 * app.use(route.<rest-methods>('/<route-rest-url>', <function-name>));
 * Here we have use 'get' method;
 *
 * Notes: 
 *	1.	`/` before route url is required.
 *	2.	function name can be callback or function call;
 *	3.	:<parameter> is a dynamic value which can be changed based on url, say e.g. name or id etc.
 */
app.use(route.get('/user/:name', getUser));

/**
 * Generator function getUser; :name is pass as argument; which is user to render body
 * and 200 OK HTTP status is set in response.
 */
function* getUser(name) {
	this.body = name;

	this.status = 200; // HTTP OK;
};

/**
 * Listen the application on port 9000 and log the console to show user on which port app is running.
 */
app.listen(9000);
console.log("koa application in listening on port 9000");