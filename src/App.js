import { Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Lobby from "./pages/Lobby/Lobby";
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Lobby />} />
      </Routes>
    </div>
  );
}

export default App;
