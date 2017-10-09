// var deg2rad = require('./math/deg2rad');
// console.log(deg2rad(180));


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Какую операцию хотите выполнить? \nadd, substract, multiply, divide, pow, rad, deg \n'
});

rl.prompt();

rl.on('line', (line) => {
	if(line == 'add') {
		var plus = require('./math/plus');
		console.log('Введите первое число?')
		var num1;
		rl.on('a', (a) => {
			num1 = a;
			return num1
		});
		console.log('Введите первое число?')
		var num2;
		rl.on('b', (b) => {
			num2 = a;
			return num2
		});
		console.log(plus(a,b));
		
	}
	else {
		console.log('wrong')
	}
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



// rl.question('Какую операцию хотите выполнить? \nadd, substract, multiply, divide, pow, rad, deg \n', answer => {
//   if (answer == 'add') {
//   	var plus = require('./math/plus');
//   	var a;
//   	rl.question('Первое число?\n', (a) => {
//   		return a

//   	});
//   	var b;
//   	rl.question('Второе число?\n', (b) => {
//   		return b
//   	});
//   	rl.question('Результат:\n', (numb) => {
//   		return plus(a,b)
//   	});
//   	rl.close();

//   }
//   else {
//   	console.log('Неправельный выбор');
//     rl.close();
//   }
// });