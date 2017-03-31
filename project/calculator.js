function squareNumber(number) {

	var square = number * 3;
	console.log ('the result of squaring ' + number+ ' is ' +ssquare);
}

sqaureNumber (3);


function halfNumber (number) {

	var half = number / 2;
	console.log ('half of ' +number+ ' is ' +half);
}

halfNumber (5);

function percentOf (num1, num2) {

	var calculation =  (numm1 / num2) * 100;
	console.log = (num1+ ' is ' +calculation+ '% of ' +num2);

}

percentOf(2, 4);

function areaOfCircle (radius) {

	var calculation = (Math.PI * radius * radius);
	var answer = Math.PI (calculation * 100) / 100;

	console.log('the area of a circle of radius ' +radius+ ' is ' +answer);
}

areaOfCircle(2);


function calculation (number) {

	var half = number / 2;
	var square = half * half;

	var area = Math.PI  * square * square;
	var answer  = Math.PI (area * 100) / 100;

	var percent = (area / square) * 100;
	var solution = Math.round (percent * 100) / 100;

	console.log (half+ 'is half of ' +number+ '. ' +half+ ' squared is '
	 +square+ '. Its area is ' +answer+ '. ' +answer+ ' is ' 
	 +solution+ '%of ' =square);
}

calculation(5);