import StepInfo from "./StepInfo";
import { Box, Stack } from "@mui/material";
import StepDetail from "./StepDetail";
import { stepDetailType, stepInfoType } from "src/types/pricingTypes";
import stepOneInfoImg from "@assets/stepOneInfoImg.png";
import mobile from "@assets/mobile.png";
import { FlexBetween } from "@styles/Flex";
import { Text } from "@styles/globalStyle";
import CustomButton from "@components/common/CustomButton";

const stepInfo: stepInfoType[] = [
  {
    order: 1,
    title: "Connect Your Content",
    desc: "Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.",
    url: "/pricing",
  },
  {
    order: 2,
    title: "Share Your Homepage",
    desc: "Share your Wavium homepage link with your followers, and we'll handle the rest.",
  },
  {
    order: 3,
    title: "Send Emails & Text Messages",
    desc: "No more going through a social platform. Reach and engage your audience directly over email and text massage.",
  },
];

const stepsDetailInfo: stepDetailType[] = [
  {
    name: "Your Homepage",
    title: "Your Content. All in",
    markedWord: "One Spot",
    descriptions: [
      "Bring all of your content together into one homepage.",
      "Your page automatically updates whenever you create.",
    ],
    demoUrl: "/pricing",
    startUrl: "/pricing",
    photo: stepOneInfoImg,
  },
  {
    name: "Create & Share",
    title: "Reach Your Audience",
    markedWord: "Directly.",
    descriptions: [
      "Embed content or create something new to share.",
      "Share content over email, text message or your homepage.",
    ],
    demoUrl: "/pricing",
    startUrl: "/pricing",
    photo: stepOneInfoImg,
  },
];

const Steps = () => {
  return (
    <Stack mt="150px" gap="80px">
      {/* step 1 */}
      <StepInfo {...stepInfo[0]} />
      {/* <StepDetail {...stepsDetailInfo[0]} /> */}

      {/* step 2 */}
      <StepInfo {...stepInfo[1]} />
      <Stack gap="40px">
        <FlexBetween gap="20px" flexDirection={{ lg: "row", xs: "column" }}>
          <Stack
            width={{ lg: "50%", md: "70%", xs: "100%" }}
            p="30px"
            bgcolor="#0D0D0D"
            position="relative"
            minHeight={{ lg: "650px", sm: "500px", xs: "400px" }}
            overflow={{ lg: "initial", xs: "hidden" }}
          >
            <Text fs="30px" c="#0FC65C">
              One Link
            </Text>
            <Text lineHeight="100%" fw="600" fontSize={{ lg: "80px", md: "60px", xs: "40px" }} c="#919191" mt="40px">
              ALL You Create.
            </Text>
            <Text lineHeight="100%" fw="600" fontSize={{ lg: "80px", md: "60px", xs: "40px" }}>
              One Link
            </Text>
            <Box width="100%" position="absolute" bottom="0" right="-120px" sx={{ img: { width: "100%" } }}>
              <img src={mobile} alt="" />
            </Box>
          </Stack>
          <Stack
            width={{ lg: "50%", md: "70%", xs: "100%" }}
            p="30px"
            bgcolor="#0D0D0D"
            position="relative"
            minHeight={{ lg: "650px", sm: "500px", xs: "400px" }}
          >
            <Text fs="30px" c="#0FC65C">
              Collect Subscribers
            </Text>
            <Text mt="80px" lineHeight="100%" fw="600" fontSize={{ lg: "80px", md: "60px", xs: "40px" }} c="#919191">
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
      {/* <StepDetail {...stepsDetailInfo[1]} /> */}
    </Stack>
  );
};

export default Steps;
