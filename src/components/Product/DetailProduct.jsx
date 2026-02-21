import {Card, Row, Col, Avatar, Descriptions, Typography} from "antd";
import {UserOutlined, MailOutlined} from "@ant-design/icons";

function DetailProduct({product = {}}) {
  if (!product || Object.keys(product).length === 0) return null;

  return (
    <Card style={{maxWidth: 720, margin: "0 auto"}} bordered>
      <Row gutter={16} align="middle">
        <Col>
          <Avatar size={80} icon={<UserOutlined />} />
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{margin: 0}}>
            {product.kode_product || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            <MailOutlined style={{marginRight: 8}} />
            {product.nama_product || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{marginTop: 16}}>
        <Descriptions.Item label="Kode Product">{product.kode_product ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Nama Product">{product.nama_product ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Jumlah">{product.jumlah ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Deskripsi">{product.deskripsi ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Kategory">{product.kategory ?? "-"}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailProduct;
