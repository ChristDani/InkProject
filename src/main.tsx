// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css'
import Loader from './common/loader';
// import './css/style.css';
// import './css/satoshi.css';
// import 'jsvectormap/dist/css/jsvectormap.css';
// import 'flatpickr/dist/flatpickr.min.css';
// import { RootStoreProvider } from './store/provider';

const LazyApp = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />git pull
  
  // </React.StrictMode>,
  <React.StrictMode>
		{/* <RootStoreProvider> */}
			<Router>
				{/* <AuthProvider> */}
					<Suspense fallback={<Loader />}>
						<LazyApp />
					</Suspense>
				{/* </AuthProvider> */}
			</Router>
		{/* </RootStoreProvider> */}
	</React.StrictMode>,
)
