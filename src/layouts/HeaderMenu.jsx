import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined} from "@ant-design/icons";
import {Button, Layout, theme, Dropdown, Avatar, Space, Badge} from "antd";
import {useNavigate} from "react-router-dom";

const {Header} = Layout;
export default function HeaderMenu({collapsed, setCollapsed}) {
  const navigate = useNavigate();
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const userName = "Admin User";
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
  return (
    <>
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
        <div style={{flex: 1}}>
          <h2 style={{margin: 0, fontSize: 22, fontWeight: 500}}>Application Fed Food Management</h2>
        </div>
        <Dropdown menu={{items: userMenuItems}} placement="bottomRight">
          <Space style={{cursor: "pointer"}}>
            <span style={{fontWeight: 500}}>{userName}</span>
            <Badge dot={true} offset={[-35, 50]} color="#52c41a" size="default">
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
    </>
  );
}
