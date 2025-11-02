import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Employee from "../pages/Employee";
import Login from "../pages/authentication/Login";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="employee" element={<Employee />} />

        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
