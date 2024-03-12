import { Box, Stack } from "@mui/material";
import { FlexBetween, FlexWrapper } from "@styles/Flex";
import footerLogo from "@assets/footerLogo.svg";
import { Text } from "@styles/globalStyle";
import { Link, useLocation } from "react-router-dom";
import { menus } from "@data/index";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <FlexBetween
      mt={{ lg: "183px", md: "140px", sm: "80px", xs: "50px" }}
      gap={{ sm: "0", xs: "15px" }}
      flexDirection={{ sm: "row", xs: "column" }}
    >
      <Stack gap="10px">
        <FlexWrapper gap="10px">
          <Box component="img" src={footerLogo} alt="" width={{ md: "47px", xs: "30px" }} />
          <Text fw="800" fontSize={{ md: "42px", xs: "30px" }}>
            Marico
          </Text>
        </FlexWrapper>
        <Box component="a" color="#707070" fontSize="27px" href="mailto:info@marico.co">
          info@marico.co
        </Box>
      </Stack>

      <FlexWrapper color="#fff" columnGap="30px" rowGap="10px" flexWrap="wrap">
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
