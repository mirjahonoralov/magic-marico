import CustomButton from "@components/common/CustomButton";
import { Stack } from "@mui/material";
import { Text } from "@styles/globalStyle";
import React from "react";
import { stepInfoType } from "src/types/pricingTypes";

const StepInfo: React.FC<stepInfoType> = ({ desc, order, title, url }) => {
  return (
    <Stack gap="15px" alignItems="center">
      <Text fw="600" fs="25px" c="var(--primary)">
        Step {order}
      </Text>
      <Text fw="600" fs="75px">
        {title}
      </Text>
      <Text fs="30px" c="var(--text)" textAlign="center" width="60%">
        {desc}
      </Text>
      {url && (
        <a href={url}>
          <CustomButton
            sx={{ width: "300px", bgcolor: "transparent", border: "1px solid rgba(112, 112, 112, 1)" }}
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
