// concat



module.exports = function pow(number,number2){

	var sum = number;

	for (var i = 1; i < number2; i++) {
		sum = sum * number;
	}

	return sum
};