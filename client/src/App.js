import { Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Lobby } from "./pages";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
