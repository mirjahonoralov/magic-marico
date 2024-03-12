import CustomButton from "@components/common/CustomButton";
import CustomTextField from "@components/common/CustomTextField";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#000"
      color="#fff"
      padding="15px"
    >
      <Box width="350px" height="450px" border="1px solid #fff" p="20px" borderRadius="7px">
        <h1>Login</h1>
        <Stack gap="20px" mt="30px">
          <CustomTextField label="Username" />
          <CustomTextField label="Password" type="password" />
          <CustomButton sx={{ mt: "30px" }} onClick={() => navigate("/pricing")}>
            Login
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignIn;
