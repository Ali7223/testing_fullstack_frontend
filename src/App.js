import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireRole from "./authentication/RequireRole";
import Unauthorized from "./components/Unauthorized";
import { ROLES } from "./config/roles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* Define protected routes with role-based access control */}
        <Route
          element={<RequireRole allowedRoles={[ROLES.User, ROLES.Admin]} />}
        >
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<RequireRole allowedRoles={[ROLES.Admin]} />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
