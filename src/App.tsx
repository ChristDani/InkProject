import { Suspense, useState } from 'react'
import Router from './router/router'
import Loader from './common/loader'
import { useNavigate, useSearchParams } from 'react-router-dom';
import helpers from './utils/helpers';

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Inkuña</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
