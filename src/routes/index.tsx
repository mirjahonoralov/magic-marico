import Pricing from "@pages/Pricing";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Box } from "@mui/material";

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
        element: (
          <Box component="h1" color="#fff" mt="50px" height="500px">
            Page not found (-_-)
          </Box>
        ),
      },
    ],
  },
]);
