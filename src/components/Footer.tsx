import { Box, Stack } from "@mui/material";
import { FlexBetween, FlexWrapper } from "@styles/Flex";
import footerLogo from "@assets/footerLogo.svg";
import { Text } from "@styles/globalStyle";
import { Link, useLocation } from "react-router-dom";
import { menus } from "@data/index";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <FlexBetween mt="80px">
      <Stack gap="10px">
        <FlexWrapper gap="10px">
          <Box component="img" src={footerLogo} alt="" />
          <Text fw="800" fs="42px">
            Marico
          </Text>
        </FlexWrapper>
        <Box component="a" color="#707070" fontSize="27px" href="mailto:info@marico.co">
          info@marico.co
        </Box>
      </Stack>

      <FlexWrapper color="#fff" gap="30px">
        {menus.map((item) => (
          <Link to={item.path} key={item.path}>
            <Text fs="20px" c={pathname === "/" + item.path ? "var(--primary)" : "#707070"} fw="500">
              {item.name}
            </Text>
          </Link>
        ))}
      </FlexWrapper>
    </FlexBetween>
  );
};

export default Footer;
