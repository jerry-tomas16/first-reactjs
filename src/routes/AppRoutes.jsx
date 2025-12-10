import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../pages/admin/Menu";
import Restoran from "../pages/admin/Restoran";
import NotFound from "../pages/NotFound";
import Employee from "../pages/admin/Employee";
import Produk from "../pages/admin/Produk";
import Login from "../pages/authentication/Login";
import Katalog from "../pages/web/Katalog";
import TopupSaldo from "../pages/web/TopupSaldo";
import StokOpname from "../pages/admin/StokOpname";
import Rekening from "../pages/admin/Rekening";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Menu" element={<Menu />} />
        <Route path="restoran" element={<Restoran />} />
        <Route path="employee" element={<Employee />} />
        <Route path="produk" element={<Produk />} />
        <Route path="stokopname" element={<StokOpname />} />
        <Route path="rekening" element={<Rekening />} />

        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Katalog" element={<Katalog />} />
        <Route path="topup-saldo" element={<TopupSaldo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
