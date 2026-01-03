import {Card, Row, Col, Avatar, Descriptions, Typography} from "antd";
import {UserOutlined, MailOutlined} from "@ant-design/icons";

function DetailBank({modulebank = {}}) {
  if (!modulebank || Object.keys(modulebank).length === 0) return null;

  return (
    <Card style={{maxWidth: 720, margin: "0 auto"}} bordered>
      <Descriptions column={1} size="small" bordered>
        <Descriptions.Item label="Code Bank">{modulebank.code_bank ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Nama Bank">{modulebank.nama_bank ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Status">{modulebank.status ?? "-"}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailBank;
