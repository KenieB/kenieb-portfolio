import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
