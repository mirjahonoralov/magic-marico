import CustomButton from "@components/common/CustomButton";
import { Box, Stack } from "@mui/material";
import { FlexBetween, FlexWrapper } from "@styles/Flex";
import { Text } from "@styles/globalStyle";
import { stepDetailType } from "src/types/pricingTypes";

const StepDetail: React.FC<stepDetailType> = ({ demoUrl, descriptions, name, startUrl, title, photo, markedWord }) => {
  return (
    <FlexBetween mt="50px" position="relative">
      <Stack width="45%">
        <Text fw="500" fs="30px">
          {name}
        </Text>
        <Text fw="600" fs="75px" mt="100px">
          {title} <span style={{ color: "var(--primary)" }}>{markedWord}</span>
        </Text>

        <Stack gap="10px" mt="20px">
          {descriptions.map((item, index) => (
            <Text key={index} fs="23px">
              {item}
            </Text>
          ))}
        </Stack>

        <FlexWrapper mt="40px" gap="30px">
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
      <Box position="absolute" right="-140px">
        <img src={photo} alt="" />
      </Box>
    </FlexBetween>
  );
};

export default StepDetail;
