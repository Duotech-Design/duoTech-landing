import Text from "./components/animationComponent/Text";
import RosslerComponent from "./components/rossler/RosslerAttractor";
import "./App.css";
function App() {
  return (
    <div style={{ position: "relative" }}>
      <RosslerComponent />
      <Text fullText="Duo Tech" />
    </div>
  );
}

export default App;
