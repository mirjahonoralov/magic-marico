import CustomButton from "@components/common/CustomButton";
import { Box, Stack } from "@mui/material";
import { FlexWrapper } from "@styles/Flex";
import { Text } from "@styles/globalStyle";
import dot from "@assets/dot.svg";
import { reasons } from "@data/index";

const Main = () => {
  return (
    <>
      <Text
        fw="700"
        fontSize={{ lg: "112px", md: "70px", xs: "40px" }}
        textAlign="center"
        mt={{ lg: "128px", md: "90px", sm: "50px", xs: "25px" }}
      >
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

      <Stack gap="50px" color="#fff" alignItems="center" mt={{ lg: "136px", md: "80px", sm: "50px", xs: "25px" }}>
        <Text
          fw="500"
          fontSize={{ lg: "40px", md: "30px", xs: "20px" }}
          width={{ lg: "50%", md: "70%", xs: "90%" }}
          textAlign="center"
        >
          Turn your audience into email and text message subscribers.
        </Text>
        <Stack gap="21px" alignItems="center">
          <FlexWrapper gap={{ md: "26px", xs: "15px" }} flexDirection={{ sm: "row", xs: "column" }}>
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
          <FlexWrapper gap="10px" justifyContent="center">
            <Box component="img" src={dot} alt="" />
            <Text fontSize={{ md: "25px", xs: "18px" }} c="rgba(112, 112, 112, 1)">
              <b style={{ color: "#fff" }}>1000+</b> creators have already started
            </Text>
          </FlexWrapper>
        </Stack>
      </Stack>

      <Stack gap="64px" alignItems="center" mt={{ lg: "188px", md: "140px", sm: "80px", xs: "40px" }}>
        <Text fw="600" fontSize={{ lg: "75px", md: "60px", xs: "40px" }} textAlign="center">
          Why Creators Love Marico
        </Text>
        <FlexWrapper gap="50px" p="0 20px" flexWrap={{ lg: "nowrap", xs: "wrap" }} justifyContent="center">
          {reasons.map((item, index) => (
            <Stack key={index} gap="10px" alignItems="center">
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
