import { A, useLocation } from 'solid-start';
import { Zumiez } from '~/icons';
export default function Header() {
	const location = useLocation();

	const active = (path) =>
		location.pathname.includes(path)
			? 'border-gray-600'
			: 'border-transparent hover:border-gray-600';

	return (
		<header className="bg-white">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-3">
				<A className="text-xl font-bold text-gray-600" href="/">
					Json generator
				</A>

				<Zumiez className="h-8" />

				<nav className="flex items-center">
					<A
						className={`border-b-2 ${active('/static')} mx-1.5`}
						href="/static"
					>
						Static
					</A>
					<A
						className={`border-b-2 ${active('/events')} mx-1.5`}
						href="/events"
					>
						Event
					</A>
				</nav>
			</div>
		</header>
	);
}
