import { RouteObject } from 'react-router-dom';
import AppRoutes from './appRouter';
import DefaultLayout from '../../layout/defaultLayout';

const Routes: RouteObject[] = [...AppRoutes];

export const getMereLayoutRoutes = (): RouteObject[] => {
	const layoutRoutes: RouteObject[] = [];

	Routes.forEach((route) => {
		const layoutRoute: RouteObject = {
			...route,
			element: (
					<DefaultLayout>{route.element}</DefaultLayout>
			),
		};

		layoutRoutes.push(layoutRoute);
	});

	return layoutRoutes;
};
