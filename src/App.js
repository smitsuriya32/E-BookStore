import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { User } from "./User";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

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
