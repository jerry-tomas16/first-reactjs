import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../pages/Menu";
import Restoran from "../pages/Restoran";
import NotFound from "../pages/NotFound";
import Employee from "../pages/Employee";
import Produk from "../pages/Produk";
import Login from "../pages/authentication/Login";
import LandingPage from "../pages/LandingPage";
import StokOpname from "../pages/StokOpname";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Menu" element={<Menu />} />
        <Route path="restoran" element={<Restoran />} />
        <Route path="employee" element={<Employee />} />
        <Route path="produk" element={<Produk />} />
        <Route path="stokopname" element={<StokOpname />} />

        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
