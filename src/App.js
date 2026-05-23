import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} /> 
        <Route path="/signup" element={<Register />} />
        <Route element={<RequireAuth allowedRoles={["user"]} />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
