import Pricing from "@pages/Pricing";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Box } from "@mui/material";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
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
