import { validate } from './Input.jsx';

const testData = {
	number: 123,
	email: 'example@email.com',
	url: 'http://example.com',
	datetime: '2011-11-11T11:11:11Z',
	float: 123.456,
	integer: 123,
};

const expectedMessages = {
	number: 'Must be a number',
	email: 'Must be an email',
	url: 'Must be a URL',
	datetime: 'Must be a datetime',
	float: 'Must be a float',
	integer: 'Must be an integer',
};

describe('Input Component', () => {
	describe('Validation', () => {
		test('validate number', () => {
			const type = 'number';
			const message = expectedMessages[type];

			expect(validate(type, testData.number)).toBe('');
			expect(validate(type, testData.email)).toBe(message);
			expect(validate(type, testData.url)).toBe(message);
			expect(validate(type, testData.datetime)).toBe(message);
			expect(validate(type, testData.float)).toBe('');
			expect(validate(type, testData.integer)).toBe('');
		});

		test('validate email', () => {
			const type = 'email';
			const message = expectedMessages[type];

			expect(validate(type, testData.number)).toBe(message);
			expect(validate(type, testData.email)).toBe('');
			expect(validate(type, testData.url)).toBe(message);
			expect(validate(type, testData.datetime)).toBe(message);
			expect(validate(type, testData.float)).toBe(message);
			expect(validate(type, testData.integer)).toBe(message);
		});

		test('validate url', () => {
			const type = 'url';
			const message = expectedMessages[type];

			expect(validate(type, testData.number)).toBe(message);
			expect(validate(type, testData.email)).toBe(message);
			expect(validate(type, testData.url)).toBe('');
			expect(validate(type, testData.datetime)).toBe(message);
			expect(validate(type, testData.float)).toBe(message);
			expect(validate(type, testData.integer)).toBe(message);
		});

		test('validate datetime', () => {
			const type = 'datetime';
			const message = expectedMessages[type];

			expect(validate(type, testData.number)).toBe(message);
			expect(validate(type, testData.email)).toBe(message);
			expect(validate(type, testData.url)).toBe(message);
			expect(validate(type, testData.datetime)).toBe('');
			expect(validate(type, testData.float)).toBe(message);
			expect(validate(type, testData.integer)).toBe(message);
		});

		test('validate float', () => {
			const type = 'float';
			const message = expectedMessages[type];

			expect(validate(type, testData.number)).toBe(message);
			expect(validate(type, testData.email)).toBe(message);
			expect(validate(type, testData.url)).toBe(message);
			expect(validate(type, testData.datetime)).toBe(message);
			expect(validate(type, testData.float)).toBe('');
			expect(validate(type, testData.integer)).toBe(message);
		});

		test('validate integer', () => {
			const type = 'integer';
			const message = expectedMessages[type];

			expect(validate(type, testData.number)).toBe('');
			expect(validate(type, testData.email)).toBe(message);
			expect(validate(type, testData.url)).toBe(message);
			expect(validate(type, testData.datetime)).toBe(message);
			expect(validate(type, testData.float)).toBe(message);
			expect(validate(type, testData.integer)).toBe('');
		});
	});
});
