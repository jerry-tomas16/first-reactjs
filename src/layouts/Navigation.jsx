import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

function Navigation(props) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <div
          style={{
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          <h1>Logo Sidebar </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: (
                <span
                  style={{ color: "inherit", cursor: "pointer" }}
                  onClick={() => navigate("/employee")}
                >
                  Employee
                </span>
              ),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: (
                <span
                  style={{ color: "inherit", cursor: "pointer" }}
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </span>
              ),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: (
                <span
                  style={{ color: "inherit", cursor: "pointer" }}
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </span>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
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
