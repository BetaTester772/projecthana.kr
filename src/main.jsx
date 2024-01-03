import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Credit from './Credit.jsx';
import Research from './Research.jsx';
import Project from './Project.jsx';
import ProjectOne from './projects/ProjectOne.jsx';
import Header from './components/Header.jsx';
import ProjectTwo from './projects/ProjectTwo.jsx';
import ProjectThree from './projects/ProjectThree.jsx';
import ProjectTen from './projects/ProjectTen.jsx';
import ProjectEleven from './projects/ProjectEleven.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/project/',
    children: [
      {
        path: '',
        element: <Project />,
      },
      {
        path: '1',
        element: (
          <>
            <Header/>
            <ProjectOne />
          </>
        ),
      },
      {
        path: '2',
        element: (
          <>
            <Header/>
            <ProjectTwo />
          </>
        ),
      },
      {
        path: '3',
        element: (
          <>
            <Header/>
            <ProjectThree />
          </>
        ),
      },
      {
        path: '7',
        element: (
          <>
            <Header/>
            <ProjectTen />
          </>
        ),
      },
      {
        path: '8',
        element: (
          <>
            <Header/>
            <ProjectEleven/>
          </>
        ),
      }
    ],
  },
  {
    path: '/research',
    element: <Research />,
  },
  {
    path: '/credit',
    element: <Credit />,
  },
  {
    path: '*',
    element: (
      <>
        <Header/>
        <h1>404 Not Found</h1>
      </>
    ),
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
