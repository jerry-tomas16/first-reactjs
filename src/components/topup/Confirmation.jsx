import {
  Card,
  Descriptions,
  Button,
  Space,
  Typography,
  Divider,
  Tag,
} from "antd";
import { CheckCircleOutlined, LeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function Confirmation(props) {
  const { dataTransaction, handleChangeStep } = props;

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <Card>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <CheckCircleOutlined
              style={{ fontSize: "48px", color: "#52c41a" }}
            />
            <Title level={3} style={{ marginTop: "16px" }}>
              Konfirmasi Pembayaran
            </Title>
          </div>

          <Divider />

          <Descriptions bordered column={1}>
            <Descriptions.Item label="Metode Pembayaran">
              <Tag color="blue">
                Transfer Bank {dataTransaction?.rekening?.bankName}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Nama Pemegang Rekening">
              <Text strong>{dataTransaction?.rekening?.accountHolder}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Nomor Rekening">
              <Text strong>{dataTransaction?.rekening?.accountNumber}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Nominal Top Up">
              <Text strong style={{ fontSize: "16px" }}>
                {formatRupiah(dataTransaction?.amount || 0)}
              </Text>
            </Descriptions.Item>
            <Descriptions.Item label="Tips">
              <Text>{formatRupiah(dataTransaction?.tip || 0)}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Total Pembayaran">
              <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
                {formatRupiah(dataTransaction?.total || 0)}
              </Text>
            </Descriptions.Item>
          </Descriptions>

          <Space
            style={{ width: "100%", justifyContent: "center" }}
            size="middle"
          >
            <Button icon={<LeftOutlined />} onClick={() => handleChangeStep(0)}>
              Kembali
            </Button>
            <Button type="primary">Konfirmasi Pembayaran</Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
}

export default Confirmation;
