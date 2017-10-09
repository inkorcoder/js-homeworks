// concat



module.exports = function rad2deg(number){

	const pRad = 180;
	// const pNum = 57.295779513;
	const pNum = 3.141592653589793;
	var prevResult =  number * pRad;
	var degrResult = prevResult / pNum;
	
	return degrResult.toFixed()
};