import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from "../layouts/DefaultLayout";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AllRecipes from '../features/recipes/pages/AllRecipes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'recettes', 
        element: <AllRecipes />
      }
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
