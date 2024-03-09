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

const Wrapper = styled(Box)({
  width: "100%",
  maxWidth: "1640px",
  margin: "30px 0",
});

function App() {
  return (
    <Container>
      <Wrapper>
        <Navbar />

        <Outlet />

        <Footer />
      </Wrapper>
    </Container>
  );
}

export default App;
