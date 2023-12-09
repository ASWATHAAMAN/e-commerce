import { Root } from "./Route";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn, Cart, Home, Shop, SingleProduct,  } from "./components";
import ErrorPage from "./Route";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop/:productName",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
