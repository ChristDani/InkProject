import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const E_404 = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 4000);
	}, []);

	return (
		<div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
			<h3 className="text-title-xl">Pagina no encontrada</h3>
			<h3 className="text-sm">Redirigiendo a la pagina de inicio...</h3>
		</div>
	);
};
