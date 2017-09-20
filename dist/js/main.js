
$(document).ready(function() {
	var waitForFinalEvent;
	waitForFinalEvent = (function() {
		var timers;
		timers = {};
		return function(callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = 'Don\'t call this twice without a uniqueId';
			}
			if (timers[uniqueId]) {
				clearTimeout(timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();

	$('.info').slideUp();

	var car = Object.create(Object.prototype);

	Object.defineProperty(car, 'name', {
			get: function () {
					return name;
			},
			set: function (value) {
					name = value;
			}
	});

	Object.defineProperty(car, 'engine', {
			get: function () {
					return engine;
			},
			set: function (value) {
					engine = value;
			}
	});

	Object.defineProperty(car, 'color', {
			get: function () {
					return color;
			},
			set: function (value) {
					color = value;
			}
	});

	Object.defineProperty(car, 'isColorChangeable', {
			get: function () {
					return isColorChangeable;
			},
			set: function (value) {
					isColorChangeable = value;
			}
	});


	function setPropety() {
			car.name = $('.name').val();
			$('.nameOut').text(car.name);

			car.engine = $('.typeEngine option:selected').html();
			var optionval = $('.typeEngine').val();
			$('.engineOut').html(car.engine);


			car.color = $('.colorRadio:checked').val();
			$('.collorInner').text(car.color);

			car.isColorChangeable = $('.checkBox').prop('checked');
			if (car.isColorChangeable) {
				$('.colorRadio').attr('disabled', 'disabled');
			}
			else {
				$('.colorRadio').removeAttr('disabled');
			}
		render();
	};

	function render() {
		$('.info').slideDown();
		$('.nameLi').html(car.name);
		$('.engineLi').html(car.engine);
		$('.colorLi').html(car.color);
		console.log(car);
	};

	$('.magic').change(function(e){
		setPropety();
	});
	
	$(window).resize(function() {
		waitForFinalEvent((function() {
		}), 200, '');
	});
});
