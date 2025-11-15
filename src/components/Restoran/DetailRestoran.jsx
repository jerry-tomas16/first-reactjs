import { Card, Row, Col, Avatar, Descriptions, Typography } from "antd";
import { CoffeeOutlined,UserOutlined } from "@ant-design/icons";
import React from "react";
function DetailRestoran({ restoran = {} }) {
  if (!restoran || Object.keys(restoran).length === 0) return null;

  return (
    <Card style={{ maxWidth: 720, margin: "0 auto" }} bordered>
      <Row gutter={16} align="middle">
        <Col>

          <div
            style={{
              width: 120,
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://disporabudpar.banjarbarukota.go.id/wp-content/uploads/2017/01/IMG_2542-copy.jpeg"
              alt={restoran.restoran || "restoran"}
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 8,
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                // hide broken image and let Avatar/email be used instead
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{ margin: 0 }}>
            {restoran.nama_restoran || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            Area : {restoran.area_restoran || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Kode restoran">
          {restoran.kode_restoran ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Area restoran">
          {restoran.area_restoran ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Nama restoran">
          {restoran.nama_restoran ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Keterangan">
        {restoran.keterangan ?? "-"}
        </Descriptions.Item>

      </Descriptions>
    </Card>
  );
}

export default DetailRestoran;
