module.exports = function zeros(expression) {
  // your solution
 	let counter = 0;
  	let arrayExp = expression.split('*');
	let result;
	
	function multiply(first, second) {
		// your solution
		let arrayNumbers = [];
		let i = 0;
		let firstNumbers = first.split('').reverse();
		let secondNumbers = second.split('').reverse();
		let arrayNumbersult;

		while (i < firstNumbers.length) {
			for (let j = 0; j < secondNumbers.length; j++) {
				let making = firstNumbers[i] * secondNumbers[j];
				if (arrayNumbers[i + j] !== undefined) {
					arrayNumbers[i + j] += making;
				} else {
					arrayNumbers[i + j] = making;
				}
			}
			i++;
		}

		for (let i = 0; i < arrayNumbers.length; i++) {
			let num = arrayNumbers[i] % 10;
			let limit = Math.floor(arrayNumbers[i] / 10);
			arrayNumbers[i] = num;

			if (arrayNumbers[i + 1] !== undefined) {
				arrayNumbers[i + 1] += limit;
			} else if (limit !== 0){
				arrayNumbers[i + 1] = limit;
			}
		}
		arrayNumbersult = arrayNumbers.reverse().join('');
		return arrayNumbersult;
	}
	

	function findFactorial(number, option) {
		let i;
		let step;
		let factorial = '';

		if (number < 2) {
			return '1'
		};

		if (option === 'doubleFactorial') {
			if (number % 2) {
				i = 3;
			} else {
				i = 2;
			} 
			step = 2;	
		} else {
			i = 2; 
			step = 1;
		}
		
		for (i; i <= number; i += step)
			if (factorial == '')
				factorial = multiply('1', String(i));
			else	
				factorial = multiply(factorial, String(i));

		return factorial;
	}
	
	for (let i = 0; i <= arrayExp.length - 1; i++) {
		let currentNumber = parseFloat(arrayExp[i]);
		let factorial = '';
		
		if (arrayExp[i][arrayExp[i].length-1] === '!' 
			&& arrayExp[i][arrayExp[i].length-2] === '!') {
			factorial = findFactorial(currentNumber, 'doubleFactorial');
		} else {
			factorial = findFactorial(currentNumber);
		}

		if (result === undefined) {
			result = multiply('1', factorial);
		} else {
			result = multiply(result, factorial);
		}
	}
	
	for (let i = result.length-1; i>= 0; i--) {
		if (result[i] == 0) {
			counter++;
		} else {
			return counter;
		}
	}
}
