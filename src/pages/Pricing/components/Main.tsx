import CustomButton from "@components/common/CustomButton";
import { Stack } from "@mui/material";
import { FlexWrapper } from "@styles/Flex";
import { Text } from "@styles/globalStyle";
import dot from "@assets/dot.svg";
import emoji1 from "@assets/emoji/1.svg";
import emoji2 from "@assets/emoji/2.svg";
import emoji3 from "@assets/emoji/3.svg";

const reasons = [
  {
    icon: emoji1,
    title: "Reduced Anxiety",
    desc: "Never worry about losing your audience.",
  },
  {
    icon: emoji2,
    title: "Lower Workload",
    desc: "Just share one link. We'll handle the rest.",
  },
  {
    icon: emoji3,
    title: "More Time",
    desc: "Spend less time on marketing tools",
  },
];

const Main = () => {
  return (
    <>
      <Text fw="700" fs="112px" textAlign="center">
        Own your audience.
      </Text>

      <Text
        fw="700"
        fs="112px"
        c="transparent"
        sx={{
          backgroundImage: "linear-gradient(to right, rgba(254, 103, 131, 1), rgba(255, 191, 132, 1))",
          backgroundClip: "text",
        }}
        textAlign="center"
      >
        So you don't lose them
      </Text>

      <Stack gap="40px" color="#fff" alignItems="center">
        <Text fw="500" fs="40px" width="50%" textAlign="center">
          Turn your audience into email and text message subscribers.
        </Text>
        <Stack gap="40px" alignItems="center">
          <FlexWrapper gap="40px">
            <CustomButton sx={{ width: "300px" }}>Get Started Now</CustomButton>
            <CustomButton
              sx={{ width: "300px", bgcolor: "transparent", border: "1px solid rgba(112, 112, 112, 1)" }}
              variant="outlined"
            >
              View A Demo
            </CustomButton>
          </FlexWrapper>
          <FlexWrapper gap="10px">
            <img src={dot} alt="" />
            <Text fs="25px" c="rgba(112, 112, 112, 1)">
              <b style={{ color: "#fff" }}>1000+</b> creators have already started
            </Text>
          </FlexWrapper>
        </Stack>
      </Stack>

      <Stack gap="50px" alignItems="center" mt="150px">
        <Text fw="600" fs="75px">
          Why Creators Love Marico
        </Text>
        <FlexWrapper gap="50px">
          {reasons.map((item, index) => (
            <Stack key={index} gap="15px" alignItems="center">
              <FlexWrapper gap="10px">
                <img src={item.icon} alt="" />
                <Text fw="600" fs="35px">
                  {item.title}
                </Text>
              </FlexWrapper>
              <Text c="var(--text)" fs="22px">
                {item.desc}
              </Text>
            </Stack>
          ))}
        </FlexWrapper>
      </Stack>
    </>
  );
};

export default Main;
