import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Credit from './Credit.jsx';
import Research from './Research.jsx';
import Project from './Project.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/research',
    element: <Research />,
  },
  {
    path: '/credit',
    element: <Credit />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
