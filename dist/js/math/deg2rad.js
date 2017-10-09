// concat



module.exports = function deg2rad(number){

	const pCorner = 180;
	const pNum = 3.141592653589793;
	var prevResult =  number * pNum;
	var radResult = prevResult / pCorner;
	
	return radResult.toFixed()
};