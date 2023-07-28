import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { User } from "./Components/User";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/user">User</NavLink>
        <br />
        <NavLink to="/about">About</NavLink>
        <br />
        <NavLink to="/contact">Contact</NavLink>
        <br />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User name="Smit" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
