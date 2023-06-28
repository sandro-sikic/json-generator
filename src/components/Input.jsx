import { createSignal } from 'solid-js';

export function validate(validator, text) {
	switch (validator) {
		case 'number':
			if (isNaN(text)) {
				return 'Must be a number';
			}
			break;

		case 'email':
			if (typeof text != 'string' || !text.includes('@')) {
				return 'Must be an email';
			}
			break;

		case 'url':
			try {
				new URL(text);
			} catch (e) {
				return 'Must be a URL';
			}
			break;

		case 'datetime':
			if (typeof text != 'string' || isNaN(Date.parse(text))) {
				return 'Must be a datetime';
			}
			break;

		case 'float':
			if (
				typeof text != 'number' ||
				isNaN(parseFloat(text)) ||
				!Number.isFinite(text) ||
				text % 1 === 0
			) {
				return 'Must be a float';
			}

			break;

		case 'integer':
			if (
				typeof text != 'number' ||
				isNaN(parseFloat(text)) ||
				!Number.isFinite(text) ||
				text % 1 !== 0
			) {
				return 'Must be an integer';
			}
			break;
	}

	return '';
}

export default function Input(props) {
	const [error, setError] = createSignal('');

	function validateAndSend(text) {
		if (['number', 'float', 'integer'].includes(props.validation)) {
			text = Number(text);
		}

		if (props.validation != null) {
			setError(validate(props.validation, text));
		}

		props.onInput(text);
	}

	return (
		<label className={`flex flex-col ${props.className}`}>
			<span className="text-gray-600 select-none">{props.label}</span>
			<input
				className={`px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 ${
					error() != '' ? 'border-red-500' : ''
				}`}
				type="text"
				value={props.value}
				onInput={(event) => validateAndSend(event.target.value)}
			/>
			<span className="text-sm text-red-500">{error()}</span>
		</label>
	);
}
