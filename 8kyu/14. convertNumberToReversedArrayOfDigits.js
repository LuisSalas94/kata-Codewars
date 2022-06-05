/* 
https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]

*/

function digitize(n) {
	let reversed = [];

	reversed.push(n.toString().split("").reverse().join(","));

	reversed = reversed.toString();

	return reversed;
}

digitize(35231);
//[1,3,2,5,3]
