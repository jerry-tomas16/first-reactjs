import Menu from "../pages/admin/Menu";
import Restoran from "../pages/admin/Restoran";
import NotFound from "../pages/NotFound";
import Employee from "../pages/admin/Employee";
import Product from "../pages/admin/Product";
import StokOpname from "../pages/admin/StokOpname";
import Rekening from "../pages/admin/Rekening";
import Deposit from "../pages/admin/Deposit";
import Bank from "../pages/admin/Bank";

export default function MainContent({location}) {
  switch (location) {
    case "/menu":
      return <Menu />;
    case "/restoran":
      return <Restoran />;
    case "/employee":
      return <Employee />;
    case "/produk":
      return <Product />;
    case "/stokopname":
      return <StokOpname />;
    case "/rekening":
      return <Rekening />;
    case "/deposit":
      return <Deposit />;
    case "/bank":
      return <Bank />;
    default:
      return <NotFound />;
  }
}
