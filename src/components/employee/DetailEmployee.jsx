import React from "react";
import { Card, Row, Col, Avatar, Descriptions, Typography } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

function DetailEmployee({ employee = {} }) {
  if (!employee || Object.keys(employee).length === 0) return null;

  return (
    <Card style={{ maxWidth: 720, margin: "0 auto" }} bordered>
      <Row gutter={16} align="middle">
        <Col>
          <Avatar size={80} icon={<UserOutlined />} />
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{ margin: 0 }}>
            {employee.name || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            <MailOutlined style={{ marginRight: 8 }} />
            {employee.email || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Usia">
          {employee.usia ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Jenis Kelamin">
          {employee.jenis_kelamin ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Pendidikan">
          {employee.pendidikan ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {employee.status ?? "-"}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailEmployee;
