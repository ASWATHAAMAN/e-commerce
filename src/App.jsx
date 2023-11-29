import { Root } from "./Route";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn, Cart, Home } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
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
  <RouterProvider router={router} />;
};

export default App;
