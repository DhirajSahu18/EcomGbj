import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import ProductDetailsPage from './pages/ProductDetailPage';
import Login from './features/Auth/components/Login';
import Signup from './features/Auth/components/SignUp';
import Protected from './features/Auth/components/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Homepage/></Protected>,
  },
  {
    path: "/details/:id",
    element: <Protected><ProductDetailsPage/></Protected>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/signup",
    element: <div><Signup/></div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
