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

  const categories = [
    {
      key: "1",
      icon: <TeamOutlined />,
      label: "Manajemen SDM",
      items: [{key: "1-1", icon: <UserOutlined />, label: "Karyawan", path: "/employee"}],
    },
    {
      key: "2",
      icon: <CoffeeOutlined />,
      label: "Manajemen Menu",
      items: [{key: "2-1", icon: <AppstoreOutlined />, label: "Menu", path: "/menu"}],
    },
    {
      key: "3",
      icon: <ShopOutlined />,
      label: "Manajemen Restoran",
      items: [
        {key: "3-1", icon: <ShopOutlined />, label: "Restoran", path: "/restoran"},
        {key: "3-2", icon: <ShoppingOutlined />, label: "Product", path: "/product"},
        {key: "3-3", icon: <DatabaseOutlined />, label: "Stok Opname", path: "/stokopname"},
      ],
    },
    {
      key: "4",
      icon: <TeamOutlined />,
      label: "Data Rekening",
      items: [{key: "4-1", icon: <AppstoreOutlined />, label: "Rekening", path: "/rekening"}],
    },
    {
      key: "5",
      icon: <MoneyCollectOutlined />,
      label: "Deposit",
      items: [{key: "5-1", icon: <AppstoreOutlined />, label: "Deposit", path: "/deposit"}],
    },
    {
      key: "6",
      icon: <MoneyCollectOutlined />,
      label: "Bank",
      items: [{key: "6-1", icon: <AppstoreOutlined />, label: "Bank", path: "/bank"}],
    },
  ];

  const openKey = () => {
    const path = location.pathname;
    for (const cat of categories) {
      for (const it of cat.items) {
        if (path.startsWith(it.path)) return [cat.key];
      }
    }
    return [];
  };

  const getSelectedKey = () => {
    const path = location.pathname;
    for (const cat of categories) {
      for (const it of cat.items) {
        if (path.startsWith(it.path)) return [it.key];
      }
    }
    return [];
  };

  const menuItems = categories.map((cat) => ({
    key: cat.key,
    icon: cat.icon,
    label: cat.label,
    children: cat.items.map((it) => ({
      key: it.key,
      icon: it.icon,
      label: it.label,
      onClick: () => {
        navigate(it.path);
        setRoutePath(it.path);
      },
    })),
  }));

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
