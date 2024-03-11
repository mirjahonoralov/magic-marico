import { Box, Stack } from "@mui/material";
import { Text } from "@styles/globalStyle";
import img from "@assets/experts.png";
import audience from "@assets/audience.png";
import logo from "@assets/logo.svg";
import dot from "@assets/dot.svg";
import { FlexWrapper } from "@styles/Flex";
import CustomButton from "@components/common/CustomButton";

const Extra = () => {
  return (
    <Stack gap="80px" mt="80px">
      <Stack gap="30px">
        <Text fw="600" fontSize={{ lg: "75px", md: "60px", xs: "40px" }} textAlign="center">
          Experts Agree
        </Text>
        <img src={img} alt="" />
      </Stack>

      <FlexWrapper
        sx={{ backgroundImage: `url(${audience})` }}
        height={{ md: "800px", xs: "500px" }}
        margin={{ md: "0 -30px", xs: "0 -20px" }}
      >
        <Text fw="600" fontSize={{ lg: "70px", md: "60px", xs: "30px" }} textAlign="center" p="0 20px">
          We've helped over 1,000 creatorsre claim control of their audience.
        </Text>
      </FlexWrapper>

      <Stack gap="20px" alignItems="center">
        <Box component="img" width={{ md: "164px", xs: "100px" }} src={logo} alt="" />
        <Text fw="700" fontSize={{ lg: "100px", md: "80px", xs: "40px" }} lineHeight="100%" textAlign="center">
          Get Started Now
        </Text>
        <Text fontSize={{ lg: "43px", md: "25px", xs: "20px" }} textAlign="center">
          Setup is easy and takes under 5 minutes.
        </Text>
        <CustomButton>Get Started Now</CustomButton>
        <FlexWrapper gap="10px">
          <Box component="img" src={dot} alt="" />
          <Text fs="25px" c="rgba(112, 112, 112, 1)">
            <b style={{ color: "#fff" }}>1000+</b> creators have already started
          </Text>
        </FlexWrapper>
      </Stack>
    </Stack>
  );
};

export default Extra;
