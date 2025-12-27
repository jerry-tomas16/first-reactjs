import { Card, Row, Col, Avatar, Descriptions, Typography } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

function DetailDeposit({ deposit = {} }) {
  if (!deposit || Object.keys(deposit).length === 0) return null;

  return (
    <Card style={{ maxWidth: 720, margin: "0 auto" }} bordered>
      <Row gutter={16} align="middle">
        <Col>
          <Avatar size={80} icon={<UserOutlined />} />
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{ margin: 0 }}>
            {deposit.userId || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            <MailOutlined style={{ marginRight: 8 }} />
            {deposit.rekening_id || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="userId">
          {deposit.userId ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Nominal">
          {deposit.nominal ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Nominal Tips">
          {deposit.nominal_tips ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Rekening Id">
          {deposit.rekening_id ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Bukti Img">
          {deposit.bukti_img ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {deposit.status ?? "-"}
        </Descriptions.Item>
        
      </Descriptions>
    </Card>
  );
}

export default DetailDeposit;
