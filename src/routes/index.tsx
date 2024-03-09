import Pricing from "@pages/Pricing";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/*",
        element: <h2 style={{ color: "#fff", marginTop: "40px" }}>Page not found (-_-)</h2>,
      },
    ],
  },
]);
