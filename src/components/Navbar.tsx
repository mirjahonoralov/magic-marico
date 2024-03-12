import { Text } from "@styles/globalStyle";
import { FlexBetween, FlexWrapper } from "../styles/Flex";
import logo from "@assets/logo.svg";
import CustomButton from "./common/CustomButton";
import { Link, useLocation } from "react-router-dom";
import { menus } from "@data/index";
import React from "react";
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, Menu, MenuItem, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleDrawer = (newOpen: boolean) => () => setOpenDrawer(newOpen);

  const DrawerList = (
    <Box
      bgcolor="#000"
      color="#fff"
      height="100vh"
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menus.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton>
              <Link to={item.path}>
                <Text fs="20px" c={pathname === "/" + item.path ? "var(--primary)" : "#707070"} fw="500">
                  {item.name}
                </Text>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "#fff" }} />
      <Stack gap="30px" width="200px" p="20px">
        <Text fs="20px" c="#fff" fw="500" sx={{ cursor: "pointer" }}>
          Login
        </Text>

        <CustomButton>Sign Up</CustomButton>
      </Stack>
    </Box>
  );

  return (
    <>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <FlexBetween>
        <FlexWrapper gap="10px">
          <Box component="img" src={logo} alt="" width={{ sm: "42px", xs: "30px" }} />
          <Text fontSize={{ sm: "37px", xs: "25px" }} c="#fff" fw="800">
            Marico
          </Text>
        </FlexWrapper>
        <FlexWrapper color="#fff" gap="39px" display={{ md: "flex", xs: "none" }}>
          <FlexWrapper gap="5px" mr="-20px">
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

        <FlexWrapper gap="0">
          <FlexWrapper gap="24px" sx={{ display: { sm: "flex", xs: "none" } }}>
            <Text fs="20px" c="#fff" fw="500" sx={{ cursor: "pointer" }}>
              Login
            </Text>

            <CustomButton>Sign Up</CustomButton>
          </FlexWrapper>
          <Button onClick={toggleDrawer(true)} sx={{ display: { md: "none", xs: "block" } }}>
            <MenuIcon sx={{ color: "#fff" }} />
          </Button>
        </FlexWrapper>
      </FlexBetween>
    </>
  );
};

export default Navbar;
