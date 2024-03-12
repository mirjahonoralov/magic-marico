import CustomButton from "@components/common/CustomButton";
import { Box, Stack } from "@mui/material";
import { FlexBetween, FlexWrapper } from "@styles/Flex";
import { Text } from "@styles/globalStyle";
import { stepDetailType } from "src/types/pricingTypes";

const StepDetail: React.FC<stepDetailType> = ({ demoUrl, descriptions, name, startUrl, title, photo, markedWord }) => {
  return (
    <FlexBetween
      mt={{ lg: "182px", md: "140px", sm: "80px", xs: "50px" }}
      position="relative"
      flexDirection={{ xl: "row", xs: "column" }}
      gap={{ xl: "0", xs: "40px" }}
    >
      <Stack width={{ xl: "45%", md: "70%", xs: "100%" }} pl={{ sm: "20px", xs: "0" }}>
        <Text fw="500" fs="30px">
          {name}
        </Text>
        <Text fw="600" fontSize={{ lg: "75px", md: "60px", xs: "40px" }} mt={{ xl: "80px", sm: "50px", xs: "30px" }}>
          {title} <span style={{ color: "var(--primary)" }}>{markedWord}</span>
        </Text>

        <Stack gap="10px" mt="27px">
          {descriptions.map((item, index) => (
            <Text key={index} fs="23px">
              {item}
            </Text>
          ))}
        </Stack>

        <FlexWrapper mt={{ lg: "66px", md: "50px", xs: "25px" }} gap="24px" flexDirection={{ md: "row", xs: "column" }}>
          <a href={startUrl}>
            <CustomButton sx={{ width: "300px" }}>Get Started Now</CustomButton>
          </a>
          <a href={demoUrl}>
            <CustomButton
              sx={{ width: "300px", bgcolor: "transparent", border: "1px solid rgba(112, 112, 112, 1)" }}
              variant="outlined"
            >
              View A Demo
            </CustomButton>
          </a>
        </FlexWrapper>
      </Stack>
      <Box
        position={{ xl: "absolute", xs: "relative" }}
        right={{ xl: "-30px", xs: "0" }}
        zIndex={1}
        width={{ xl: "820px", md: "70%", xs: "90%" }}
      >
        <Box component="img" src={photo} width="100%" />
        <Box
          width={{ xl: "309px", md: "250px", sm: "180px", xs: "100px" }}
          height={{ xl: "276px", md: "230px", sm: "160px", xs: "80px" }}
          bgcolor="#8B8B8B"
          position="absolute"
          bottom={{ xl: "-80px", md: "-60px", sm: "-30px", xs: "0" }}
          right={{ xl: "150px", md: "120px", sm: "100px", xs: "50px" }}
          zIndex={-1}
        />
      </Box>
    </FlexBetween>
  );
};

export default StepDetail;
