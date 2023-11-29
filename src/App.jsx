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
        children: <Cart />,
      },
      {
        path: "/about",
        children: <About />,
      },
    ],
  },
]);

const App = () => {
  <RouterProvider router={router} />;
};

export default App;
