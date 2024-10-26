import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout.jsx';
import Home from './Components/Home.jsx';
import SingleProduct from './Components/SingleProduct.jsx';
import CartContext from './Context/CartContex.jsx';
import ShoppingCart from './Components/ShoppingCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <CartContext>
     <Layout />
    </CartContext>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singleProduct",
        element: <SingleProduct />,
         
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
         
      },
     
    
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
