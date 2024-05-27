import { RouteObject } from 'react-router-dom';
import AppRoutes from './appRouter';
// import PrivateRoute from '../validationRoutes/PrivateRoute';
import DefaultLayout from '../../layout/defaultLayout';

const Routes: RouteObject[] = [...AppRoutes];

export const getMereLayoutRoutes = (): RouteObject[] => {
	const layoutRoutes: RouteObject[] = [];

	Routes.forEach((route) => {
		const layoutRoute: RouteObject = {
			...route,
			element: (
				// <PrivateRoute>
					<DefaultLayout>{route.element}</DefaultLayout>
				// </PrivateRoute>
			),
		};

		layoutRoutes.push(layoutRoute);
	});

	return layoutRoutes;
};
