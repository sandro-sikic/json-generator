import { useNavigate } from 'solid-start';
export default function NotFound() {
	const navigate = useNavigate();
	navigate('/');
}
