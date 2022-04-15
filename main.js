function addField(title, name) {
	const label = document.createElement('label');

	const span = document.createElement('span');
	span.innerHTML = title;

	const input = document.createElement('input');
	input.name = name;

	label.appendChild(span);
	label.appendChild(input);

	return label;
}

function preview() {
	const base = document.getElementById('base');
	const output = document.getElementById('output');

	const baseForm = new FormData(base);
	const baseObject = {};
	baseForm.forEach((value, key) => (baseObject[key] = value));

	const ctas = document.getElementById('cta').childNodes;
	const ctaObject = [];
	ctas.forEach((element) => {
		const form = new FormData(element);
		const object = {};
		form.forEach((value, key) => {
			if (key === 'id') {
				object[key] = parseInt(value.replace(/\D/g, ''));
			} else {
				object[key] = value;
			}
		});
		ctaObject.push(object);
	});

	output.innerHTML = JSON.stringify(
		{ card_content: baseObject, btn_group: ctaObject },
		null,
		2
	);
}

function addSelect(title, name, options) {
	const label = document.createElement('label');
	const span = document.createElement('span');
	span.innerHTML = title;

	const select = document.createElement('select');
	select.name = name;

	for (const key in options) {
		const option = document.createElement('option');
		option.value = key;
		option.innerHTML = options[key];
		select.appendChild(option);
	}

	label.appendChild(span);
	label.appendChild(select);

	return label;
}

function removeCTA(name) {
	document.getElementById(name).remove();
	preview();
}

function addCTA() {
	const cta = document.getElementById('cta');
	const name = `cta_${cta.childElementCount}`;

	const form = document.createElement('form');
	form.id = name;

	const actions = document.createElement('div');
	actions.className = 'actions';
	const actionsText = document.createElement('span');
	actionsText.innerHTML = 'Actions: ';

	const remove = document.createElement('button');
	remove.onclick = (event) => {
		event.preventDefault();
		removeCTA(name);
	};
	remove.innerHTML = 'Remove';

	const id = addField('ID (Number): ', 'id');
	const title = addField('Title: ', 'title');
	const eventName = addField('Event name: ', 'event_name');
	const data = addField('Data: ', 'data');
	const type = addSelect('Type: ', 'type', {
		website: 'Website',
	});
	const style = addSelect('Style: ', 'style', {
		'VIEW01.V01': 'View01v01',
		'VIEW01.V02': 'View01v02',
	});

	form.appendChild(id);
	form.appendChild(title);
	form.appendChild(eventName);
	form.appendChild(data);
	form.appendChild(type);
	form.appendChild(style);

	actions.appendChild(actionsText);
	actions.appendChild(remove);
	form.appendChild(actions);

	cta.appendChild(form);
	preview();
}

function registerOnChangeEvent(tag) {
	const elements = document.getElementsByTagName(tag);
	for (const element of elements) {
		element.oninput = preview;
	}
}

preview();

setInterval(() => {
	registerOnChangeEvent('input');
	registerOnChangeEvent('textarea');
	registerOnChangeEvent('select');
}, 1000);

function copyMessage(type) {
	const button = document.getElementById('copy');

	if (type === 'success') {
		button.innerText = 'Copied to clipboard!';
		button.style = 'background-color: #4CAF50';
	} else if (type === 'error') {
		button.innerText = 'Failed to copy to clipboard';
		button.style = 'background-color: #f44336';
	} else {
		throw 'Copy message type argument is unknown.';
	}

	setTimeout(() => {
		button.innerText = 'Copy to clipboard';
		button.style = '';
	}, 3000);
}

function copyToClipboard() {
	preview();

	const text = document.getElementById('output').innerHTML;

	const fallbackCopyTextToClipboard = (text) => {
		const textArea = document.createElement('textarea');
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			document.execCommand('copy');
			copyMessage('success');
		} catch (error) {
			console.error(error);
			copyMessage('error');
		}

		document.body.removeChild(textArea);
	};

	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard
		.writeText(text)
		.then(function () {
			copyMessage('success');
		})
		.catch(function (error) {
			console.error(error);
			copyMessage('error');
		});
}
