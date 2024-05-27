import { useRoutes } from 'react-router-dom';
import { getMereLayoutRoutes } from './routes';
import { E_404 } from '../pages/error/404';
// import SignIn from '../pages/Authentication/SignIn';

const Router = () => {

    const allRoutes = getMereLayoutRoutes()
	const routes = useRoutes([
		{
			path: '*',
			element: <E_404 />,
		},
        // {
        //     path: '/auth/signin',
        //     element: <SignIn />, //! solo para el test de redireccion
        // },
        ...allRoutes
	]);

	return routes;
};

export default Router;
