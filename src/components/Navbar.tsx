import { Text } from "@styles/globalStyle";
import { FlexBetween, FlexWrapper } from "../styles/Flex";
import logo from "@assets/logo.svg";
import CustomButton from "./common/CustomButton";
import { Link, useLocation } from "react-router-dom";
import { menus } from "@data/index";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <FlexBetween>
      <FlexWrapper gap="10px">
        <img src={logo} alt="" />
        <Text fs="37px" c="#fff" fw="800">
          Marico
        </Text>
      </FlexWrapper>
      <FlexWrapper color="#fff" gap="30px">
        {menus.slice(0, 3).map((item) => (
          <Link to={item.path} key={item.path}>
            <Text fs="20px" c={pathname === "/" + item.path ? "var(--primary)" : "#707070"} fw="500">
              {item.name}
            </Text>
          </Link>
        ))}
      </FlexWrapper>
      <FlexWrapper gap="30px">
        <Text fs="20px" c="#fff" fw="500">
          Login
        </Text>
        <CustomButton>Sign Up</CustomButton>
      </FlexWrapper>
    </FlexBetween>
  );
};

export default Navbar;
