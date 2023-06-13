import { useNavigate } from 'solid-start';
import Button from '~/components/Button';
import { Zumiez } from '~/icons';

export default function Home() {
	const navigate = useNavigate();

	return (
		<main class="flex flex-col mx-auto flex-grow max-w-sm justify-center items-center gap-5">
			<Zumiez className="w-full" />
			<h1 class="w-full text-6xl text-gray-900 font-thin">Json Generator</h1>
			<div className="flex gap-4 justify-center">
				<Button onClick={() => navigate('/static')}>Static</Button>
				<Button onClick={() => navigate('/events')}>Events</Button>
			</div>
		</main>
	);
}
