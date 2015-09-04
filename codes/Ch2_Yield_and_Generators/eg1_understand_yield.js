/**
 * Description: Understanding Yield in JavaScript.
 * Yield is a part of the ECMAScript 6 standard.
 * It used to pause and resume a generator function
 *
 * More info visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
 * 
 * How to run:
 * node --harmony eg1_understand_yield.js
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

'use strict';

/**
 * Generator function. The yield keyword causes generator function execution to pause and 
 * the value of the expression following the yield keyword is returned to the generator's caller.
 * The yield keyword actually returns an IteratorResult object with two properties, value and done. 
 * 
 * The value property is the result of evaluating the yield expression, and 
 * done is a Boolean indicating whether or not the generator function has fully completed.
 *
 * Once paused on a yield expression, the generator's code execution remains paused 
 * until the generator's next() method is called. 
 *
 */
function* allIntegers() {
	var index = 0;

	while (index <= 5) {

		yield index++;
	}
};

var num = allIntegers();

console.log(num.next()); // 0

console.log(num.next()); // 1

console.log(num.next()); // 2

console.log(num.next()); // 3

console.log(num.next()); // 4

console.log(num.next()); // 5

console.log(num.next()); // undefined

console.log(num.next()); // undefined