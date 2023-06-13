export default function Fieldset(props) {
	return (
		<fieldset
			className={`border border-gray-300 p-4 rounded-lg ${props.className}`}
		>
			<legend className="text-lg font-medium text-gray-700">
				{props.legend}
			</legend>
			{props.children}
		</fieldset>
	);
}
