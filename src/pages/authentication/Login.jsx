import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (values.username && values.password) {
      setIsLoading(true);
      if (values.username === "admin" && values.password === "admin") {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/employee");
        }, 1000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          alert("Invalid username or password");
        }, 1000);
      }
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        style={{
          width: 400,
          background: "rgba(255,255,255,0.3)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          border: "none",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white", marginBottom: -10 }}>
          Login
        </h1>
        <h3 style={{ textAlign: "center", color: "white", marginBottom: 30 }}>
          Welcome to My App
        </h3>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360, width: "100%" }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              visibilityToggle={true}
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              loading={isLoading}
              style={{ marginBottom: 20 }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
