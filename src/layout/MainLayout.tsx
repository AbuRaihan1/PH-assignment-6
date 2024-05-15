import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../ui/Container";
import FooterComp from "../components/Footer/FooterComp";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <FooterComp />
    </div>
  );
};

export default MainLayout;
