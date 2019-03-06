const functions = require('./myFunction');
//import {add, sub, mult, div} from './myFunction';
test('checks add, subtract, multiply, division on 2 and 4', () => {
	expect(functions.add(2, 4)).toBe(6);
	expect(functions.sub(2, 4)).toBe(-2);
	expect(functions.mult(2, 4)).toBe(8);
	expect(functions.div(2, 4)).toBe(1/2);
});

test('Add and multiply should fail and sub and div should pass.', () => {
	expect(functions.add(2, 4)).toBe(5);
	expect(functions.sub(2, 4)).toBe(-2);
	expect(functions.mult(2, 4)).toBe(6);
	expect(functions.div(2, 4)).toBe(1/2);
});
