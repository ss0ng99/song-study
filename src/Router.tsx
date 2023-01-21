import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
