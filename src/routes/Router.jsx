import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Login from "../pages/authentication/Login";
import Navbar from "../layouts/Navbar.jsx";
import Katalog from "../pages/web/Katalog";
import TopupSaldo from "../pages/web/TopupSaldo";
// import AuthVerify from "./AuthVerify";
const Home = () => {
  return <Navigate replace to="/login" />;
};
const ProtectedRoute = () => {
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  // return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
};
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/menu" element={<Navbar path="/menu" />} />
          <Route path="/modulebank" element={<Navbar path="/modulebank" />} />
          <Route path="/restoran" element={<Navbar path="/restoran" />} />
          <Route path="/employee" element={<Navbar path="/employee" />} />
          <Route path="/produk" element={<Navbar path="/produk" />} />
          <Route path="/stokopname" element={<Navbar path="/stokopname" />} />
          <Route path="/rekening" element={<Navbar path="/rekening" />} />
          <Route path="/deposit" element={<Navbar path="/deposit" />} />
          <Route path="Katalog" element={<Katalog />} />
          <Route path="topup-saldo" element={<TopupSaldo />} />
        </Route>
        <Route path="*" element={<Navbar path="*" />} />
      </Routes>
      {/* <AuthVerify /> */}
    </BrowserRouter>
  );
}

export default Router;
