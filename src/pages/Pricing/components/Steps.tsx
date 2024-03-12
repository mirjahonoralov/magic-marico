import StepInfo from "./StepInfo";
import { Box, Stack } from "@mui/material";
import StepDetail from "./StepDetail";
import mobile from "@assets/mobile.png";
import { FlexBetween } from "@styles/Flex";
import { Text } from "@styles/globalStyle";
import CustomButton from "@components/common/CustomButton";
import { stepInfo, stepsDetailInfo } from "@data/index";

const Steps = () => {
  return (
    <Stack>
      {/* step 1 */}
      <StepInfo {...stepInfo[0]} />
      <StepDetail {...stepsDetailInfo[0]} />

      {/* step 2 */}
      <StepInfo {...stepInfo[1]} />
      <Stack gap={{ md: "49px", xs: "20px" }} mt={{ lg: "176px", md: "140px", sm: "80px", xs: "40px" }}>
        <FlexBetween gap="23px" flexDirection={{ lg: "row", xs: "column" }}>
          <Stack
            width={{ lg: "50%", md: "70%", xs: "100%" }}
            p="30px"
            bgcolor="#0D0D0D"
            position="relative"
            minHeight={{ lg: "666px", sm: "500px", xs: "400px" }}
            overflow={{ lg: "initial", xs: "hidden" }}
          >
            <Text fs="30px" c="#0FC65C">
              One Link
            </Text>
            <Text lineHeight="100%" fw="600" fontSize={{ lg: "80px", md: "60px", xs: "40px" }} c="#919191" mt="24px">
              ALL You Create.
            </Text>
            <Text lineHeight="100%" fw="600" fontSize={{ lg: "80px", md: "60px", xs: "40px" }}>
              One Link
            </Text>
            <Box
              width="100%"
              position="absolute"
              bottom={{ lg: "0", xs: "-10px" }}
              right="-120px"
              sx={{ img: { width: "100%" } }}
            >
              <img src={mobile} alt="" />
            </Box>
          </Stack>
          <Stack
            width={{ lg: "50%", md: "70%", xs: "100%" }}
            p="30px"
            bgcolor="#0D0D0D"
            position="relative"
            minHeight={{ lg: "666px", sm: "500px", xs: "400px" }}
          >
            <Text fs="30px" c="#0FC65C">
              Collect Subscribers
            </Text>
            <Text mt="96px" lineHeight="100%" fw="600" fontSize={{ lg: "80px", md: "60px", xs: "40px" }} c="#919191">
              Emails. <br /> Phone #s..
            </Text>
            <Text lineHeight="100%" fw="600" fontSize={{ lg: "80px", md: "60px", xs: "40px" }}>
              All Yours.
            </Text>
          </Stack>
        </FlexBetween>

        <CustomButton sx={{ width: "300px", mx: "auto" }}>Get Started</CustomButton>
      </Stack>

      {/* step 3 */}
      <StepInfo {...stepInfo[2]} />
      <StepDetail {...stepsDetailInfo[1]} />
    </Stack>
  );
};

export default Steps;
