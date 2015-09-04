/**
 * Description: Using Yield with generator functions.
 *
 * More info visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
 * 
 * How to run:
 * node --harmony eg2_using_yield.js
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

'use strict';

function* users() {
	yield {
		name: "Ashwin",
		domain: "Software",
		department: "Engineering"
	};

	yield {
		name: "Kundan",
		domain: "Software",
		department: "Management"
	};

	yield {
		name: "Saju",
		domain: "Software",
		department: "Engineering"
	};
};

var emp = users();

/**
 * { value: undefined, done: true } this indicates end of the sequence.
 */

var hasDone = false;
var data = {};

while (!hasDone) {

	data = emp.next();
	hasDone = data.done;

	if (hasDone) {
		console.log("The End !!!");
		break;
	} else {
		console.log(data);
	}
}