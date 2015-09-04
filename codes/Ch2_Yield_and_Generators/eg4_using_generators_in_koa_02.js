/**
 * Description: Using generator in koa and co, co-wait middlewares.
 * co 4.0.0 has been released, which now relies on promises ES7
 * 
 * More info visit: https://github.com/tj/co
 *
 * How to run:
 * node --harmony eg3_using_generator_in_koa.js
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

'use strict';

var co = require('co');
var wait = require('co-wait');

co(function*() {
	var result = yield Promise.resolve(true);

	console.log("Started yield wait");
	console.time("Parallel");

	/**
	 * Yield wait in Parallel;
	 */
	var a = wait(1000);
	var b = wait(2000);
	var c = wait(3000);

	var res = yield [a, b, c];

	console.timeEnd("Parallel");
	console.log("Return Promise");

	return result;
}).then(function(value) {
	if (value) {
		console.log("The End !!!");
	}
}, function(err) {
	console.error(err.stack);
});