import {Card, Row, Col, Avatar, Descriptions, Typography} from "antd";
import {UserOutlined, MailOutlined} from "@ant-design/icons";

function DetailBank({modulebank = {}}) {
  if (!modulebank || Object.keys(modulebank).length === 0) return null;

  return (
    <Card style={{maxWidth: 720, margin: "0 auto"}} bordered>
      <Row gutter={16} align="middle">
        <Col>
          <Avatar size={80} icon={<UserOutlined />} />
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{margin: 0}}>
            {modulebank.code_bank || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            <MailOutlined style={{marginRight: 8}} />
            {modulebank.nama_bank || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{marginTop: 16}}>
        <Descriptions.Item label="Code Bank">{modulebank.code_bank ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Nama Bank">{modulebank.nama_bank ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Status">{modulebank.status ?? "-"}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailBank;
