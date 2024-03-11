import CustomButton from "@components/common/CustomButton";
import { Box, Stack } from "@mui/material";
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
      <Text fw="700" fontSize={{ lg: "112px", md: "70px", xs: "40px" }} textAlign="center">
        Own your audience.
      </Text>

      <Text
        fw="700"
        fontSize={{ lg: "112px", md: "70px", xs: "40px" }}
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
        <Text
          fw="500"
          fontSize={{ lg: "40px", md: "30px", xs: "20px" }}
          width={{ lg: "50%", md: "70%", xs: "90%" }}
          textAlign="center"
        >
          Turn your audience into email and text message subscribers.
        </Text>
        <Stack gap="40px" alignItems="center">
          <FlexWrapper gap={{ md: "40px", xs: "20px" }} flexDirection={{ sm: "row", xs: "column" }}>
            <CustomButton sx={{ width: { md: "300px", xs: "250px" } }}>Get Started Now</CustomButton>
            <CustomButton
              sx={{
                width: { md: "300px", xs: "250px" },
                bgcolor: "transparent",
                border: "1px solid rgba(112, 112, 112, 1)",
              }}
              variant="outlined"
            >
              View A Demo
            </CustomButton>
          </FlexWrapper>
          <FlexWrapper gap="10px" width="80%" alignItems="start" justifyContent="center">
            <Box component="img" mt="5px" src={dot} alt="" />
            <Text fs="25px" c="rgba(112, 112, 112, 1)">
              <b style={{ color: "#fff" }}>1000+</b> creators have already started
            </Text>
          </FlexWrapper>
        </Stack>
      </Stack>

      <Stack gap="50px" alignItems="center" mt="150px">
        <Text fw="600" fontSize={{ lg: "75px", md: "60px", xs: "40px" }} textAlign="center">
          Why Creators Love Marico
        </Text>
        <FlexWrapper gap="50px" p="0 20px" flexWrap={{ lg: "nowrap", xs: "wrap" }} justifyContent="center">
          {reasons.map((item, index) => (
            <Stack key={index} gap="15px" alignItems="center">
              <FlexWrapper gap="10px">
                <img src={item.icon} alt="" />
                <Text fw="600" fontSize={{ sm: "35px", xs: "25px" }}>
                  {item.title}
                </Text>
              </FlexWrapper>
              <Text c="var(--text)" fs="22px" textAlign="center">
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
