import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AllRecipes from '../features/recipes/pages/AllRecipes';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // équivalent de path: ''
        element: <Home />,
      },
      {
  path: 'recettes',
  element: <AllRecipes />
,}

      // d'autres routes ici
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
