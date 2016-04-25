var fb = require('../FizzBuzz');

describe("A program that plays FizzBuzz", function() {

	it("counts from 1 to 100", function() {
		expect(fb.count(1,5)).toBe("1,2,3,4,5");
	});
	it("can take a number and return 'Fizz' for multiples of three and the number otherwise", function ()  {
		expect(fb.fizzer(3)).toBe('Fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
	});
		it("can take a number and return 'Buzz' for multiples of five and the number otherwise", function ()  {
		expect(fb.buzzer(5)).toBe('Buzz');
		expect(fb.buzzer(6)).toBe(6);
		expect(fb.buzzer(17)).toBe(17);
	});
		it("can take a number and return 'FizzBuzz' for multiples of fifteen and the number otherwise", function ()  {
		expect(fb.fizzerbuzzer(15)).toBe('FizzBuzz');
		expect(fb.fizzerbuzzer(5)).toBe(5);
		expect(fb.fizzerbuzzer(3)).toBe(3);
	});
});