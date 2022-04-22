function addField(title, name) {
	const label = document.createElement('label');

	const span = document.createElement('span');
	span.innerHTML = title;

	const input = document.createElement('input');
	input.name = name;
	input.oninput = preview;

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
		{ card_content: { ...baseObject, btn_group: ctaObject } },
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
	select.oninput = preview;

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
		preview();
	};
	remove.innerHTML = 'Remove';

	const id = addField('ID (Number): ', 'id');
	const title = addField('Title: ', 'title');
	const eventName = addField('Event name: ', 'event_name');
	const data = addField('Data: ', 'data');
	const type = addSelect('Type: ', 'type', {
		WEBSITE: 'WEBSITE',
	});
	const style = addSelect('Style: ', 'style', {
		'VIEW01.v01': 'VIEW01.v01',
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

	return form;
}

function registerOnChangeEvent(tag) {
	const elements = document.getElementsByTagName(tag);
	for (const element of elements) {
		element.oninput = preview;
	}
}

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

function showImport() {
	const self = this.event.target;

	var content = self.nextElementSibling;

	if (content.style.maxHeight) {
		self.innerText = 'Import';
		content.style.maxHeight = content.scrollHeight + 'px';
		content.style.overflow = 'hidden';
		requestAnimationFrame(function () {
			content.style.maxHeight = null;
		});
	} else {
		self.innerText = 'Close Import';
		content.style.maxHeight = content.scrollHeight + 'px';
		setTimeout(() => {
			content.style.maxHeight = 'unset';
			content.style.overflow = 'unset';
		}, 300);
	}

	const element = document.getElementById('import');
	element.oninput = parseImport;
}

function parseImport(element) {
	try {
		JSON.parse(element.target.value).card_content;
		document.getElementById('import-error').style.display = 'none';
	} catch (error) {
		document.getElementById('import-error').style.display = 'block';
		return;
	}

	const card_content = JSON.parse(element.target.value).card_content;

	for (const key in card_content) {
		const element = document.querySelector(`[name="${key}"]`);
		if (element) {
			element.value = card_content[key];
		}
	}

	const cta_ids = [];
	document.getElementById('cta').childNodes.forEach((cta) => {
		cta_ids.push(cta.getAttribute('id'));
	});

	for (const cta_id of cta_ids) {
		removeCTA(cta_id);
	}

	console.log('card_content.btn_group', card_content['btn_group']);

	for (let index = 0; index < card_content.btn_group.length; index++) {
		cta = addCTA();
		for (const [key, value] of Object.entries(card_content.btn_group[index])) {
			const item = cta.querySelector(`[name="${key}"]`);
			if (item) {
				item.value = value;
			}
		}
	}
	preview();
}

registerOnChangeEvent('input');
registerOnChangeEvent('textarea');
registerOnChangeEvent('select');
preview();
