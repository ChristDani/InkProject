import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home'));
const Beneficios = lazy(() => import('../../pages/beneficios'));
const Planes = lazy(() => import('../../pages/planes'));
const Nosotros = lazy(() => import('../../pages/nosotros'));
const Demo = lazy(() => import('../../pages/demo'));

const AppRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/Inicio',
		element: <Home />,
	},
	{
		path: '/beneficios',
		element: <Beneficios />,
	},
	{
		path: '/planes',
		element: <Planes />,
	},
	{
		path: '/nosotros',
		element: <Nosotros />,
	},
	{
		path: '/demo',
		element: <Demo />,
	},
];

export default AppRoutes