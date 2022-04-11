import { Container, Row, Col } from "react-bootstrap";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Home />
      </Container>
    </div>
  );
}

export default App;
