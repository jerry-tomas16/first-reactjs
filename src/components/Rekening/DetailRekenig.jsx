import {Card, Row, Col, Avatar, Descriptions, Typography} from "antd";
import {UserOutlined, MailOutlined} from "@ant-design/icons";

function DetailRekening({rekening = {}}) {
  if (!rekening || Object.keys(rekening).length === 0) return null;

  return (
    <Card style={{maxWidth: 720, margin: "0 auto"}} bordered>
      <Row gutter={16} align="middle">
        <Col>
          <Avatar size={80} icon={<UserOutlined />} />
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{margin: 0}}>
            {rekening.nama_bank || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            <MailOutlined style={{marginRight: 8}} />
            {rekening.nama_pemilik || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{marginTop: 16}}>
        <Descriptions.Item label="Nama Bank">{rekening.nama_bank ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Nama Pemilik">{rekening.nama_pemilik ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Nomor Rekening">{rekening.nomer_rekening ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Status">{rekening.status ?? "-"}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailRekening;
