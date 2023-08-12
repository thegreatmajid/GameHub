import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Layout from "../pages/Layout";
import GameDetailPage from "../pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "/games/:id", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);
export default router;
