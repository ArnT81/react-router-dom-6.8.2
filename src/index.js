import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useRouteError
} from "react-router-dom";
//  COMPONENTS
import Home from './components/Home';
import Users from './components/Users';
import DisplaySingleUser from './components/DisplaySingleUser';
import RouteMissing from './components/RouteMissing';
//  HELPERFUNCTIONS
import { getUsers } from './helpers/users';


//  Could be used for vague error handling like "Something went wrong"
function NothingReturnedFromLoader() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "users",
    element: <Users />,
    loader: getUsers,
    errorElement: <NothingReturnedFromLoader /> //doesńt have access to the response error
  },
  {
    path: "users/:id",
    element: <DisplaySingleUser />,
    loader: ({ params }) => getUsers(params)
  },
  {
    path: "*",
    element: <RouteMissing />
  },
]);


//! FROM ELEMENTS 
/* export const createRoutes = () =>
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="users"
        element={<Users />}
        loader={getUsers}
        // errorElement={<NothingReturnedFromLoader />} //doesńt have access to the response error
      />
      <Route
        path="users/:id"
        element={<DisplaySingleUser />}
        loader={({ params }) => getUsers(params)}
      />
    </>
  );

const createRouter = () => createBrowserRouter(createRoutes());
const router = createRouter(); */


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);