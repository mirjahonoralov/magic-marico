import StepInfo from "./StepInfo";
import { Stack } from "@mui/material";
import StepDetail from "./StepDetail";
import { stepDetailType, stepInfoType } from "src/types/pricingTypes";
import stepOneInfoImg from "@assets/stepOneInfoImg.png";

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
    <Stack mt="150px" gap="50px">
      <StepInfo {...stepInfo[0]} />
      <StepDetail {...stepsDetailInfo[0]} />
      <StepInfo {...stepInfo[1]} />
      <StepDetail {...stepsDetailInfo[1]} />
    </Stack>
  );
};

export default Steps;
