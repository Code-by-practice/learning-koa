/**
 * Description: Display welcome message on browser
 *
 * How to run:
 * node --harmony eg1_hello-world.js
 * Open browser -> localhost:9000
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
 * Simple function to attach message to body. It has a strange name called * asterix;
 * which indicates this function is generator function (ECMA Script 6 feature)
 */
app.use(function*() {
	this.body = "Hello World! Welcome to the training kit for koa - the next generation node.js framework!";
});

/**
 * Listen the application on port 9000 and log the console to show user on which port app is running.
 */
app.listen(9000);
console.log("koa application in listening on port 9000");