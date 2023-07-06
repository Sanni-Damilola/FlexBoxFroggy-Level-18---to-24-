import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
