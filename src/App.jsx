import { Root } from "./Route";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cart, Home } from "./components";
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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  <RouterProvider router={router} />;
};

export default App;
