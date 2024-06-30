import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css'
import Loader from './common/loader';

const LazyApp = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Suspense fallback={<Loader />}>
				<LazyApp />
			</Suspense>
		</Router>
	</React.StrictMode>,
)
