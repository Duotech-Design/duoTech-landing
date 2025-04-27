import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import UnderConstruction from "./pages/UnderConstruction";
import { V2Site } from "./pages/V2Site";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/v2" element={<V2Site />} />
      </Routes>
    </Router>
  );
}

export default App;
