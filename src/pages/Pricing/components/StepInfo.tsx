import CustomButton from "@components/common/CustomButton";
import { Stack } from "@mui/material";
import { Text } from "@styles/globalStyle";
import React from "react";
import { stepInfoType } from "src/types/pricingTypes";

const StepInfo: React.FC<stepInfoType> = ({ desc, order, title, url }) => {
  return (
    <Stack alignItems="center" mt={{ lg: "189px", md: "140px", sm: "80px", xs: "40px" }}>
      <Text fw="600" fs="25px" c="var(--primary)">
        Step {order}
      </Text>
      <Text fw="600" fontSize={{ lg: "75px", md: "60px", xs: "40px" }} textAlign="center">
        {title}
      </Text>
      <Text
        fontSize={{ sm: "30px", xs: "20px" }}
        c="var(--text)"
        textAlign="center"
        width={{ lg: "60%", md: "80%", xs: "90%" }}
      >
        {desc}
      </Text>
      {url && (
        <a href={url}>
          <CustomButton
            sx={{ width: "300px", bgcolor: "transparent", border: "1px solid rgba(112, 112, 112, 1)", mt: "34px" }}
            variant="outlined"
          >
            View Avaliable Sources
          </CustomButton>
        </a>
      )}
    </Stack>
  );
};

export default StepInfo;
