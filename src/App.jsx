import { Root } from "./Route";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn, Cart, Home,  } from "./components";
import {ErrorPage} from "./Route"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
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
