import React from "react";
import { Card, Row, Col, Avatar, Descriptions, Typography } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

function DetailProduk({ produk = {} }) {
  if (!produk || Object.keys(produk).length === 0) return null;

  return (
    <Card style={{ maxWidth: 720, margin: "0 auto" }} bordered>
      <Row gutter={16} align="middle">
        <Col>
          <Avatar size={80} icon={<UserOutlined />} />
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{ margin: 0 }}>
            {produk.kode_produk || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            <MailOutlined style={{ marginRight: 8 }} />
            {produk.nama_produk || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Kode Produk">
          {produk.kode_produk ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Nama Produk">
          {produk.nama_produk ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Jumlah">
          {produk.jumlah ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Deskripsi">
          {produk.deskripsi ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Kategory">
          {produk.kategory ?? "-"}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailProduk;
