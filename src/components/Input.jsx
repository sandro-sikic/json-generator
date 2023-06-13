export default function Input(props) {
	return (
		<label className={`flex flex-col ${props.className}`}>
			<span className="text-gray-600 select-none">{props.label}</span>
			<input
				className="px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
				type="text"
				value={props.value}
				onInput={(event) => props.onInput(event.target.value)}
			/>
		</label>
	);
}
