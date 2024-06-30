import { Suspense } from 'react'
import Router from './router/router'
import Loader from './common/loader'
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import helpers from './utils/helpers';

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </>
  )
}

export default App
