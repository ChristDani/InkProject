import { useRoutes } from 'react-router-dom';
import { getMereLayoutRoutes } from './routes';
import { E_404 } from '../pages/error/404';

const Router = () => {

    const allRoutes = getMereLayoutRoutes()
	const routes = useRoutes([
		{
			path: '*',
			element: <E_404 />,
		},
        ...allRoutes
	]);

	return routes;
};

export default Router;
