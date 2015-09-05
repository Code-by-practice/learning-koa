/**
 * Description: Using koa HTTP request object.
 *
 * How to run:
 * node --harmony eg2_request_object.js
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
	 * Properties of request object.
	 */
	console.log('Request Header: ', this.request.header);

	console.log('Request Method: ', this.request.method);

	console.log('Request URL: ', this.request.url);

	console.log('Request Path: ', this.request.path);

	console.log('Request QueryString: ', this.request.querystring);

	/**
	 * Request functions
	 * Check what kind of content-type is coming in request.
	 */
	console.log(this.request.is('json'));

	console.log(this.request.is('html'));

	console.log(this.request.is('text'));

	// OR 
	switch(this.request.accepts('json', 'html', 'text')) {
		case 'json': break;

		case 'html': break;

		case 'text': break;

		default: this.throw(406, 'json, html or text allowed');
	}

});

/**
 * Listen the application on port 9000 and log the console to show user on which port app is running.
 */
app.listen(9000);
console.log('koa application in listening on port 9000');