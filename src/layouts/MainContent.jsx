import Menu from "../pages/admin/Menu";
import Restoran from "../pages/admin/Restoran";
import NotFound from "../pages/NotFound";
import Employee from "../pages/admin/Employee";
import Produk from "../pages/admin/Produk";
import StokOpname from "../pages/admin/StokOpname";
import Rekening from "../pages/admin/Rekening";
import Deposit from "../pages/admin/Deposit";

export default function MainContent({location}) {
  switch (location) {
    case "/menu":
      return <Menu />;
    case "/restoran":
      return <Restoran />;
    case "/employee":
      return <Employee />;
    case "/produk":
      return <Produk />;
    case "/stokopname":
      return <StokOpname />;
    case "/rekening":
      return <Rekening />;
    case "/deposit":
      return <Deposit />;
    default:
      return <NotFound />;
  }
}
