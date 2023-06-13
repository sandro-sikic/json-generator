import { For } from 'solid-js';

export default function Select(props) {
	return (
		<label className="flex flex-col">
			<span className="text-gray-600 select-none">{props.label}</span>
			<select
				id={props.id}
				name={props.name}
				value={props.value}
				onChange={(event) => props.onChange(event.target.value)}
				className="px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
			>
				<For each={props.options}>
					{(option) => <option value={option.value}>{option.label}</option>}
				</For>
			</select>
		</label>
	);
}
