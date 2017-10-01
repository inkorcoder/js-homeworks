
// $(document).ready(function() {


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





	// function carInfo(name, caption, siblings, parent, isPrimary ){
	// 	this.name = name;
	// 	this.caption = caption;
	// 	this.siblings = siblings;
	// 	this.parent = parent;
	// 	this.isPrimary = isPrimary;

	// 	this.getParent = function(arg){
	// 		if (this.name == arg.parent) {
	// 			console.log('Прямой Родитель')
	// 		}
	// 		else if (this.parent == arg.parent){
	// 			console.log('не прямой родитель но общий производитель ' + this.parent)
	// 		}
	// 		else {
	// 			console.log('Не родитель');
	// 		}
	// 	}
	// 	this.getSiblings = function(sib){

	// 		for (var i = 0; i < sib.siblings.length; i++) {
	// 		  if (sib.siblings[i] === name) {
	// 		  	console.log( name + ' = ' +  sib.name + ' соседи');
	// 		  	return false
	// 		  }
	// 		}

	// 		console.log( name + ' = ' +  sib.name + ' не соседи')
	// 	}
	// }

	// // parent
	// var Camry = new carInfo('Camry', 'CamryEdition was one of a long car in toyota',
	//  ['Corolla' ,'Supra'], 'toyota', true);

	// // parent
	// var Supra = new carInfo('Supra', 'Supra one of a fastest car in the world',
	//  ['Camry', 'Corolla'], 'toyota', true);
	// 	// child
	// 	var Celica = new carInfo('Celica', 'Celica is a child of toyota Supra', 
	// 		['Celsior'],'Supra', false);
	// 	var Celsior = new carInfo('Celsior', 'Celsior is a child of toyota Supra', 
	// 		['Celica'],'Supra', false);

	// // parent
	// var Corolla = new carInfo('Corolla', 'Corolla is a bisness class',
	//  ['Camry', 'Supra'], 'toyota', true);
	// 	//child
	// 	var Starlet = new carInfo('Starlet', 'Starlet is a my car', 
	// 	[], 'Corolla', false);


	// // family
	// 	Supra.getParent(Camry);

	// // siblings
	// 	Supra.getSiblings(Camry);

	// // Проверяем какая марка к какой оноситься
	// 	console.log(Supra instanceof carInfo);


	// // parent
	// var Tribeca = new carInfo('Tribeca', 'TribecaEdition was one of a long car in subaru',
	//  ['Forester' ,'Impreza'], 'subaru', true);

	// // parent
	// var Impreza = new carInfo('Impreza', 'Impreza one of a fastest car in the world',
	//  ['Tribeca', 'Forester'], 'subaru', true);
	// 	// child
	// 	var Wrx = new carInfo('Wrx', 'Wrx is a child of subaru Impreza', 
	// 		['Celsior'],'Impreza', false);
	// 	var STI = new carInfo('STI', 'STI is a child of subaru Impreza', 
	// 		['Wrx'],'Impreza', false);

	// // parent
	// var Forester = new carInfo('Forester', 'Forester is a bisness class',
	//  ['Tribeca', 'Impreza'], 'subaru', true);



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

// homework3

function $(node, context) {
	// выборка будет представлять из себя массив выбраных нод
	var collection = [];
	// если ничего не прошло, то вохвращаем пустой массив
	if (!node){
		return collection;
	}
	// если селектор приходит строкой
	if (typeof node === 'string'){
		// если приходит контекст, ищем елемент в нем
		if (context){
			collection = [].slice.call($(context)[0].querySelectorAll(node));
		// если нет - то ищем по документу
		} else {
			collection = [].slice.call(document.querySelectorAll(node));
		}
	// если в селектор попадает единичный элемент
	// nodeType может быть одним из:
	// 1 элемент
	// 3 текст
	// 8 комментарий
	// 9 document
	// и их еще много на самом деле
	} else if (node.nodeType && (node.nodeType === 1 || node.nodeType === 9)){
		collection = [node];
	// если в селектор попадает NodeList
	} else if (typeof node === 'object'){
		collection = [].slice.call(node);
	}
	// пробегаемся по массиву с событиями
	events.map(function(eventName){
		// записываем метод на массив по имени события (напрмиер collection['click'])
		collection[eventName] = function(callback) {
			// для каждой ноды в выборке
			collection.map(function(node, index){
				// навешиваем обработчик события
				node.addEventListener(eventName, function(e){
					// и замыкаем на нем this путем вызова call в ее контексте
					callback.call(node, e);
				}, false);
			});
		}
	});
	// то же самое делаем для событий на document
	if (collection[0] === document){
		documentEvents.map(function(eventObj){
			collection[eventObj.ev] = function(callback) {
				collection.keydown(function(e){
					if (callback && e.keyCode === eventObj.key){
						callback.call(node, e);
					}
				});
			}
		});
	}
	// устанавливаем метод trigger
	collection.trigger = function(eventName){
		// для каждой ноды в выборке
		collection.map(function(node){
			// если на документе есть свойство 'createEvent'
			// то это новый браузер и на него можно навесить через
			// 'addEventListener'
			if (document.createEvent) {
				event = new Event(eventName);
				node.dispatchEvent(event);
			// если нет - то от старый и используем старый подход
			} else {
				event = document.createEventObject();
				node.fireEvent('on'+eventName, event);
			}
		});
	};
	// всегда возвращаем выборку
	return collection;
}


console.log($('#main'));




// function fibonacci(n) {
//   var f = 1;  var b = 1;
//   var i = 3;
//   for (var i = 3; i <= n; i++) {
//     var c = f + b;
//     f = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fibonacci(10));


// homework4


	var shortStr = `<head>
				<title>My Title</title>
				<link rel="stylesheet" href="css/_bundle.min.css">
			</head>
			<body>
				<main>
					<div class="container" id="container">
						<div class="row">
							<div class="col-xs-6">
								<a href="someurl.com" class="link-href" data-call="#popup">
									<figure>
										<img src="" alt="some image">
										<figcaption>
											Caption <br> here!
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="col-xs-6">
								<a href="someurl.com" class="link-href" data-call="#popup">
									<figure>
										<img src="" alt="some image">
										<figcaption>
											Caption <br> here!
										</figcaption>
									</figure>
								</a>
							</div>
						</div>
					</div>
				</main>
			</body>
			`;




	var tagsReg = /(\bhead\b|\btitle\b|\blink\b(?!-)|body|main|div|\ba\b|a(?=>)|\bimg\b|\bul\b|\bol\b|\bfigure\b|\bfigcaption\b|\bbr\b)/gm;
	var chevronReg =	/[(<)(/>)]/gm;
	var classReg = /\bsrc\b\=|\brel\b\=|\balt\b\=|\bhref\b\=|data-[a-z]*\=/gi;
	var inClas = /"(.*?)"/gim;
	var nReg = /<br>/gim;
	var tabReg = /\t/gim;
	var spaceReg = /\s/gim;

	var shortStr11 = shortStr.replace(nReg, '&crarr;');
	var shortStr12 = shortStr11.replace(tabReg, '&mdash;');
	var shortStr13 = shortStr12.replace(spaceReg, '&middot;');
	var shortStr1 = shortStr13.replace(chevronReg, '<span class="white bracket-open">$&</span>');
	var shortStr2 = shortStr1.replace(tagsReg, '<span class="red">$&</span>');
	var shortStr3 = shortStr2.replace(classReg, '<span class="aqua">$&</span>');

	// console.log(shortStr3);

	document.getElementById('out').innerHTML = shortStr3;
	















	// });
