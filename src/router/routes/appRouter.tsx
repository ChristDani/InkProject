import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home'));
const Benefits = lazy(() => import('../../pages/benefits'));
const Plans = lazy(() => import('../../pages/plans'));
const Us = lazy(() => import('../../pages/us'));
const Demo = lazy(() => import('../../pages/demo'));

const AppRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/InkProject',
		element: <Home />,
	},
	{
		path: '/Inicio',
		element: <Home />,
	},
	{
		path: '/beneficios',
		element: <Benefits />,
	},
	{
		path: '/planes',
		element: <Plans />,
	},
	{
		path: '/nosotros',
		element: <Us />,
	},
	{
		path: '/demo',
		element: <Demo />,
	},
];

export default AppRoutes