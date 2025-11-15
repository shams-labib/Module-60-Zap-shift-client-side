import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
