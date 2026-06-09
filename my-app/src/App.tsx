import { Routes, Route } from "react-router";
import { Home, Counter, CounterDown } from "./components/Home.tsx";
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
        <a href="/counter">Counter</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/counter"
          element={
            <>
              <Counter /> <CounterDown />{" "}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
