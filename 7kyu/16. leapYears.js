/* https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript */

function isLeapYear(year) {
	return year % 400 === 0 || (year % 4 === 0 && year % 100 != 0) ? true : false;
}

console.log(isLeapYear(2000));
