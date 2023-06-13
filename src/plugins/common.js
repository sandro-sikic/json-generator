import { saveAs } from 'file-saver';

export function copyToClipboard(text) {
	const fallbackCopyTextToClipboard = (text) => {
		const textArea = document.createElement('textarea');
		textArea.value = text;

		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			document.execCommand('copy');
			document.body.removeChild(textArea);
			return 'success';
		} catch (error) {
			console.error(error);
			document.body.removeChild(textArea);
			return 'error';
		}
	};

	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}

	return navigator.clipboard.writeText(text);
}

export function fileImport(event, callback) {
	const reader = new FileReader();

	reader.onload = (event) => {
		try {
			callback(JSON.parse(event.target.result));
		} catch (error) {}
	};

	reader.readAsText(event.target.files[0]);
}

export function fileExport(filename, content) {
	const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
	saveAs(blob, filename);
}
