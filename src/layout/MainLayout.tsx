import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../ui/Container";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
