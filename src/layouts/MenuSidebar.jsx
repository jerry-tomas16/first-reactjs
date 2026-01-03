import {
  UserOutlined,
  ShopOutlined,
  AppstoreOutlined,
  TeamOutlined,
  CoffeeOutlined,
  ShoppingOutlined,
  DatabaseOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import {Menu} from "antd";
import {useNavigate, useLocation} from "react-router-dom";

export default function MainContent({collapsed, setRoutePath}) {
  const navigate = useNavigate();
  const location = useLocation();

  const openKey = () => {
    const path = location.pathname;
    if (path.startsWith("/employee")) return ["1"];
    if (path.startsWith("/menu")) return ["2"];
    if (path.startsWith("/restoran") || path.startsWith("/produk") || path.startsWith("/stokopname")) return ["3"];
    if (path.startsWith("/rekening")) return ["4"];
    if (path.startsWith("/deposit")) return ["5"];
    if (path.startsWith("/modulebank")) return ["6"];
    return [];
  };

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path.startsWith("/employee")) return ["1-1"];
    if (path.startsWith("/menu")) return ["2-1"];
    if (path.startsWith("/restoran")) return ["3-1"];
    if (path.startsWith("/produk")) return ["3-2"];
    if (path.startsWith("/stokopname")) return ["3-3"];
    if (path.startsWith("/rekening")) return ["4-1"];
    if (path.startsWith("/deposit")) return ["5-1"];
    return [];
  };

  const menuItems = [
    {
      key: "1",
      icon: <TeamOutlined />,
      label: "Manajemen SDM",
      children: [
        {
          key: "1-1",
          icon: <UserOutlined />,
          label: "Karyawan",
          onClick: () => {
            navigate("/employee");
            setRoutePath("/employee");
          },
        },
      ],
    },
    {
      key: "2",
      icon: <CoffeeOutlined />,
      label: "Manajemen Menu",
      children: [
        {
          key: "2-1",
          icon: <AppstoreOutlined />,
          label: "Menu",
          onClick: () => {
            navigate("/menu");
            setRoutePath("/menu");
          },
        },
      ],
    },
    {
      key: "3",
      icon: <ShopOutlined />,
      label: "Manajemen Restoran",
      children: [
        {
          key: "3-1",
          icon: <ShopOutlined />,
          label: "Restoran",
          onClick: () => {
            navigate("/restoran");
            setRoutePath("/restoran");
          },
        },
        {
          key: "3-2",
          icon: <ShoppingOutlined />,
          label: "Produk",
          onClick: () => {
            navigate("/produk");
            setRoutePath("/produk");
          },
        },
        {
          key: "3-3",
          icon: <DatabaseOutlined />,
          label: "Stok Opname",
          onClick: () => {
            navigate("/stokopname");
            setRoutePath("/stokopname");
          },
        },
      ],
    },
    {
      key: "4",
      icon: <TeamOutlined />,
      label: "Data Rekening",
      children: [
        {
          key: "4-1",
          icon: <AppstoreOutlined />,
          label: "Rekening",
          onClick: () => {
            navigate("/rekening");
            setRoutePath("/rekening");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <MoneyCollectOutlined />,
      label: "Deposit",
      children: [
        {
          key: "5-1",
          icon: <AppstoreOutlined />,
          label: "Deposit",
          onClick: () => {
            navigate("/deposit");
            setRoutePath("/deposit");
          },
        },
      ],
    },
         {
      key: "6",
      icon: <MoneyCollectOutlined />,
      label: "ModuleBank",
      children: [
        {
          key: "6-1",
          icon: <AppstoreOutlined />,
          label: "ModuleBank",
          onClick: () => {
            navigate("/modulebank");
            setRoutePath("/modulebank");
          },
        },
      ],
    }
  ];
  return (
    <>
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: collapsed ? 16 : 18,
          fontWeight: "bold",
          padding: "0 16px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {!collapsed && <h1 style={{margin: 0, fontSize: 18}}>Logo Sidebar</h1>}
        {collapsed && <h1 style={{margin: 0, fontSize: 16}}>LS</h1>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={getSelectedKey()}
        defaultOpenKeys={openKey()}
        items={menuItems}
        style={{
          background: "#015085",
          border: "none",
        }}
        className="custom-submenu"
      />
    </>
  );
}
