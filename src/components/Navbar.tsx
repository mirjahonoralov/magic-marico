import { Text } from "@styles/globalStyle";
import { FlexBetween, FlexWrapper } from "../styles/Flex";
import logo from "@assets/logo.svg";
import CustomButton from "./common/CustomButton";
import { Link, useLocation } from "react-router-dom";
import { menus } from "@data/index";
import React from "react";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <FlexBetween>
      <FlexWrapper gap="10px">
        <img src={logo} alt="" />
        <Text fs="37px" c="#fff" fw="800">
          Marico
        </Text>
      </FlexWrapper>
      <FlexWrapper color="#fff" gap="30px">
        <FlexWrapper gap="5px">
          <Text
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            fw="500"
            fs="20px"
            c="#707070"
            sx={{ backgroundColor: "transparent", cursor: "pointer" }}
          >
            Use Cases
          </Text>
          <KeyboardArrowDownIcon sx={{ color: "var(--text)" }} />
        </FlexWrapper>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Services</MenuItem>
        </Menu>

        {menus.slice(0, 3).map((item) => (
          <Link to={item.path} key={item.path}>
            <Text fs="20px" c={pathname === "/" + item.path ? "var(--primary)" : "#707070"} fw="500">
              {item.name}
            </Text>
          </Link>
        ))}
      </FlexWrapper>
      <FlexWrapper gap="30px">
        <Text fs="20px" c="#fff" fw="500" sx={{ cursor: "pointer" }}>
          Login
        </Text>

        <CustomButton>Sign Up</CustomButton>
      </FlexWrapper>
    </FlexBetween>
  );
};

export default Navbar;
