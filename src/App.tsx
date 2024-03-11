import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#000",
});

function App() {
  return (
    <Container>
      <Box sx={{ width: "100%", padding: { md: "30px", xs: "20px" }, maxWidth: { md: "1700px", xs: "1680px" } }}>
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </Container>
  );
}

export default App;
