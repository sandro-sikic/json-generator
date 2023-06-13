export default function Pre(props) {
	return (
		<pre
			id={props.id}
			className={`p-4 whitespace-pre-wrap w-full overflow-auto ${props.className}`}
		/>
	);
}
