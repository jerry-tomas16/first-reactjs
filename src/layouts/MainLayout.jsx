import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/halaman-utama">Halaman Utama</Link> |{" "}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default MainLayout;
