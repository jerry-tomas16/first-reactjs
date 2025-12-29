import {useState} from "react";

import {Layout, theme} from "antd";
import HeaderMenu from "./HeaderMenu";
import MenuSidebar from "./MenuSidebar";
import MainContent from "./MainContent";
const {Sider, Content} = Layout;

function Navbar({path}) {
  const [routePath, setRoutePath] = useState(path);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout style={{minHeight: "100vh"}}>
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
        <MenuSidebar setRoutePath={setRoutePath} collapsed={collapsed} />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 240,
          transition: "margin-left 0.2s",
        }}
      >
        <HeaderMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "20px 12px",
            padding: "12px 24px 0 24px",
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <MainContent location={routePath} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Navbar;
