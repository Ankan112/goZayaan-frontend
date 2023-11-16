import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard Home", "1", <PieChartOutlined />),
  getItem("Students Analytics", "2", <TeamOutlined />),
  getItem("Course", "sub1", <FileOutlined />, [
    getItem("All Course", "3"),
    getItem("Create Course", "4"),
    getItem("Update Course", "5"),
    getItem("Delete Course", "6"),
  ]),
  getItem("Message", "sub2", <TeamOutlined />, [
    getItem("Students", "7"),
    getItem("Instructors", "8"),
  ]),
  getItem("Add Quizzes", "9", <FileOutlined />),
  getItem("Upload Videos", "10", <FileOutlined />),
];
const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleMenu = (items) => {
    console.log(items);
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={() => handleMenu(items)}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              <Link href={"/"}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={"/dashboard"}>Dashboard</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              height: "80vh",

              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        {/* </Header> */}
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          All Rights Reserved &copy; Easy Education.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
