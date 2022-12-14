import './App.css';
import { Suspense } from 'react';
import Lab06 from './pages/lab06';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: (
      <Suspense fallback='Loading...'>
        <Lab06 />
      </Suspense>
    ),
  }]);

  return <RouterProvider fallback="Loading..." router={router} />;

}

export default App;
