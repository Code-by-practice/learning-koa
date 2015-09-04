/**
 * Description: Using generator in koa and co, co-wait middlewares.
 * co 4.0.0 has been released, which now relies on promises ES7
 * 
 * More info visit: https://github.com/tj/co
 *
 * How to run:
 * node --harmony eg5_using_generator_in_koa_03.js
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

'use strict';

var koa = require('koa');
var app = koa();

app.use(function* xResponseTime(next) {

	var start = new Date;
	yield next;

	var ms = new Date - start;
	this.set("X-Response-Time", ms + " ms");
});

app.use(function* consoleLogger(next) {

	var start = new Date;
	yield next;

	var ms = new Date - start;
	console.log("%s %s - %s", this.method, this.url, ms);
});

app.use(function*() {
	this.body = "Hello koa";
});

/**
 * Listen the application on port 9000 and log the console to show user on which port app is running.
 */
app.listen(9000);
console.log("koa application in listening on port 9000");