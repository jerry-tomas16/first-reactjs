import {Card, Row, Col, Avatar, Descriptions, Typography} from "antd";
import {UserOutlined, MailOutlined} from "@ant-design/icons";

function DetailBank({bank = {}}) {
  if (!bank || Object.keys(bank).length === 0) return null;

  return (
    <Card style={{maxWidth: 720, margin: "0 auto"}} bordered>
      <Descriptions column={1} size="small" bordered>
        <Descriptions.Item label="Code Bank">{bank.code_bank ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Nama Bank">{bank.nama_bank ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Status">{bank.status ?? "-"}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailBank;
