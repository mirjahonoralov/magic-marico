import CustomButton from "@components/common/CustomButton";
import CustomTextField from "@components/common/CustomTextField";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
      <Box width="350px" border="1px solid #fff" p="20px" borderRadius="7px">
        <h1>Sign Up</h1>
        <Stack gap="20px" mt="30px">
          <CustomTextField label="Email" type="email" />
          <CustomTextField label="Username" />
          <CustomTextField label="Password" type="password" />
          <CustomButton sx={{ mt: "30px" }} onClick={() => navigate("/pricing")}>
            Sign Up
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUp;
