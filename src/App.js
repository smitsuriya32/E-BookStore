import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User } from "./User";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
