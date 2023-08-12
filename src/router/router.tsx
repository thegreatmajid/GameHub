import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Layout from "../pages/Layout";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "/games/:id", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);
export default router;
