import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Container from "./ui/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
