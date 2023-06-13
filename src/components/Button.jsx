export default function Button(props) {
	return (
		<button
			className={`bg-gray-700 hover:bg-gray-900 text-sm text-white font-bold py-1 px-4 rounded ${props.className}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
