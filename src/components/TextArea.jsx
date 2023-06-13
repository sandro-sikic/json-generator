export default function TextArea(props) {
	return (
		<label className="flex flex-col">
			<span className="text-gray-600 select-none">{props.label}</span>
			<textarea
				className={`px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 h-32 ${props.className}`}
				type="text"
				value={props.value}
				onInput={(event) => props.onInput(event.target.value)}
			/>
		</label>
	);
}
