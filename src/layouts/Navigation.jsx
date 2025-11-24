import { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ShopOutlined,
  AppstoreOutlined,
  TeamOutlined,
  CoffeeOutlined,
  ShoppingOutlined,
  DatabaseOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  theme,
  Dropdown,
  Avatar,
  Space,
  Badge,
} from "antd";
import { useNavigate, useLocation } from "react-router-dom";
const { Header, Sider, Content } = Layout;

function Navigation(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  // Data user login (sesuaikan dengan data dari state/context/localStorage)
  const userName = "Admin User"; // Ganti dengan data user sebenarnya

  const handleLogout = () => {
    // Tambahkan logic logout di sini
    console.log("Logout clicked");
    navigate("/");
  };

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: () => navigate("/profile"),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
      danger: true,
    },
  ];

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path.includes("/employee")) return "1-1";
    if (path.includes("/menu")) return "2-1";
    if (path.includes("/restoran")) return "3-1";
    if (path.includes("/produk")) return "3-2";
    if (path.includes("/stokopname")) return "3-3";
    return "1-1";
  };

  const getDefaultOpenKeys = () => {
    const path = location.pathname;
    if (path.includes("/employee")) return ["1"];
    if (path.includes("/menu")) return ["2"];
    if (
      path.includes("/restoran") ||
      path.includes("/produk") ||
      path.includes("/stokopname")
    )
      return ["3"];
    return ["1"];
  };

  useEffect(() => {
    if (!collapsed) {
      setOpenKeys(getDefaultOpenKeys());
    }
  }, [location.pathname, collapsed]);

  const menuItems = [
    {
      key: "1",
      icon: <TeamOutlined />,
      label: "Manajemen SDM",
      children: [
        {
          key: "1-1",
          icon: <UserOutlined />,
          label: "Employee",
          onClick: () => navigate("/employee"),
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
          onClick: () => navigate("/menu"),
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
          onClick: () => navigate("/restoran"),
        },
        {
          key: "3-2",
          icon: <ShoppingOutlined />,
          label: "Produk",
          onClick: () => navigate("/produk"),
        },
        {
          key: "3-3",
          icon: <DatabaseOutlined />,
          label: "Stok Opname",
          onClick: () => navigate("/stokopname"),
        },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={240}
        collapsedWidth={80}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#015085",
        }}
      >
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
          {!collapsed && (
            <h1 style={{ margin: 0, fontSize: 18 }}>Logo Sidebar</h1>
          )}
          {collapsed && <h1 style={{ margin: 0, fontSize: 16 }}>LS</h1>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          openKeys={collapsed ? [] : openKeys}
          onOpenChange={setOpenKeys}
          items={menuItems}
          style={{
            background: "#015085",
            border: "none",
          }}
          className="custom-submenu"
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 240,
          transition: "margin-left 0.2s",
        }}
      >
        <Header
          style={{
            padding: "0 30px 0 0",
            background: colorBgContainer,
            position: "sticky",
            top: 0,
            zIndex: 1,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Space style={{ cursor: "pointer" }}>
              <span style={{ fontWeight: 500 }}>{userName}</span>
              <Badge
                dot={true}
                offset={[-35, 50]}
                color="#52c41a"
                size="default"
              >
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: "#015085",
                  }}
                  size="large"
                />
              </Badge>
            </Space>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "20px 12px",
            padding: "12px 24px 0 24px",
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Navigation;
