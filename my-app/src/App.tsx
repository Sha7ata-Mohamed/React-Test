import { Routes, Route } from "react-router";
import { Home, Card } from "./components/Home";
import About from "./components/About";
import "./static/css/Navbar.css";
import "./static/css/About.css";
import "./static/css/Home.css";

function App() {
  return (
    <>
      <nav className="nav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<><Home /><Card /></>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
