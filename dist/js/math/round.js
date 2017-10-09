// concat



module.exports = function round(number){
	function isInteger(num) {
	  var num = (number ^ 0) === number;
	  return num
	}
	if (isInteger() === true) {
		return number
	}
	else {
		return number.toFixed();
	}
};