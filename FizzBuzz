exports.count = function (begin, end) {

	var output = begin;
	for (var i = begin; i < end; i = i + 1) {
		output = output + " " + exports.fizzer((i + 1)) +exports.buzzer ((i + 1));
	}
	// return 1, 2, 3, 4, 5
	return output;
};

exports.fizzer = function (num){
	if(0 === num % 3) {
	return "Fizz";
	}
	return num;
};
exports.buzzer = function (num){
	if(0 === num % 5) {
	return "Buzz";
	}
	return num;
};
exports.fizzerbuzzer = function (num){
	if(0 === num % 15){
	return "FizzBuzz";
	}
	return num;
};