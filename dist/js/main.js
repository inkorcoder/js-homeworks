
$(document).ready(function() {


	// task 1

	// $('.info').slideUp();

	// var car = Object.create(Object.prototype);

	// Object.defineProperty(car, 'name', {
	// 		get: function () {
	// 				return name;
	// 		},
	// 		set: function (value) {
	// 				name = value;
	// 		}
	// });

	// Object.defineProperty(car, 'engine', {
	// 		get: function () {
	// 				return engine;
	// 		},
	// 		set: function (value) {
	// 				engine = value;
	// 		}
	// });

	// Object.defineProperty(car, 'color', {
	// 		get: function () {
	// 				return color;
	// 		},
	// 		set: function (value) {
	// 				color = value;
	// 		}
	// });

	// Object.defineProperty(car, 'isColorChangeable', {
	// 		get: function () {
	// 				return isColorChangeable;
	// 		},
	// 		set: function (value) {
	// 				isColorChangeable = value;
	// 		}
	// });


	// function setPropety() {
	// 		car.name = $('.name').val();
	// 		$('.nameOut').text(car.name);

	// 		car.engine = $('.typeEngine option:selected').html();
	// 		var optionval = $('.typeEngine').val();
	// 		$('.engineOut').html(car.engine);


	// 		car.color = $('.colorRadio:checked').val();
	// 		$('.collorInner').text(car.color);

	// 		car.isColorChangeable = $('.checkBox').prop('checked');
	// 		if (car.isColorChangeable) {
	// 			$('.colorRadio').attr('disabled', 'disabled');
	// 		}
	// 		else {
	// 			$('.colorRadio').removeAttr('disabled');
	// 		}
	// 	render();
	// };

	// function render() {
	// 	$('.info').slideDown();
	// 	$('.nameLi').html(car.name);
	// 	$('.engineLi').html(car.engine);
	// 	$('.colorLi').html(car.color);
	// 	console.log(car);
	// };

	// $('.magic').change(function(e){
	// 	setPropety();
	// });





	function carInfo(name, caption, siblings, parent, isPrimary ){
		this.name = name;
		this.caption = caption;
		this.siblings = siblings;
		this.parent = parent;
		this.isPrimary = isPrimary;

		this.getParent = function(arg){
			if (this.name == arg.parent) {
				console.log('Прямой Родитель')
			}
			else if (this.parent == arg.parent){
				console.log('не прямой родитель но общий производитель ' + this.parent)
			}
			else {
				console.log('Не родитель');
			}
		}
		this.getSiblings = function(sib){

			for (var i = 0; i < sib.siblings.length; i++) {
			  if (sib.siblings[i] === name) {
			  	console.log( name + ' = ' +  sib.name + ' соседи');
			  	return false
			  }
			}

			console.log( name + ' = ' +  sib.name + ' не соседи')
		}
	}

	// parent
	var Camry = new carInfo('Camry', 'CamryEdition was one of a long car in toyota',
	 ['Corolla' ,'Supra'], 'toyota', true);

	// parent
	var Supra = new carInfo('Supra', 'Supra one of a fastest car in the world',
	 ['Camry', 'Corolla'], 'toyota', true);
		// child
		var Celica = new carInfo('Celica', 'Celica is a child of toyota Supra', 
			['Celsior'],'Supra', false);
		var Celsior = new carInfo('Celsior', 'Celsior is a child of toyota Supra', 
			['Celica'],'Supra', false);

	// parent
	var Corolla = new carInfo('Corolla', 'Corolla is a bisness class',
	 ['Camry', 'Supra'], 'toyota', true);
		//child
		var Starlet = new carInfo('Starlet', 'Starlet is a my car', 
		[], 'Corolla', false);


	// family
		Supra.getParent(Camry);

	// siblings
		Supra.getSiblings(Camry);

	// Проверяем какая марка к какой оноситься
		console.log(Supra instanceof carInfo);


	// parent
	var Tribeca = new carInfo('Tribeca', 'TribecaEdition was one of a long car in subaru',
	 ['Forester' ,'Impreza'], 'subaru', true);

	// parent
	var Impreza = new carInfo('Impreza', 'Impreza one of a fastest car in the world',
	 ['Tribeca', 'Forester'], 'subaru', true);
		// child
		var Wrx = new carInfo('Wrx', 'Wrx is a child of subaru Impreza', 
			['Celsior'],'Impreza', false);
		var STI = new carInfo('STI', 'STI is a child of subaru Impreza', 
			['Wrx'],'Impreza', false);

	// parent
	var Forester = new carInfo('Forester', 'Forester is a bisness class',
	 ['Tribeca', 'Impreza'], 'subaru', true);



// Это общая описание общих  веток


// carInfo {производитель}

// camry corolla supra  {соседи}

// camry (одна в роду)

// corolla.starlet (есть  наследник)

// supra.celica (первый наследник)
// supra.celsior (второй наследник)


// subary

// tribeca 

// imreza.wrx
// impreza.sti

// forester










	
});
