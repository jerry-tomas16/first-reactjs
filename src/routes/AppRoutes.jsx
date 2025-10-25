import { BrowserRouter, Routes, Route } from "react-router-dom";
import Makanan from "../pages/Makanan";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Employee from "../pages/Employee";
import Login from "../pages/authentication/Login";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="makanan" element={<Makanan />} />
        <Route path="contact" element={<Contact />} />
        <Route path="employee" element={<Employee />} />

        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
