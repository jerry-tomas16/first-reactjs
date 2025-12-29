import {useState} from "react";
import {Descriptions, Button, Space, Typography, Divider, Tag, Upload, Avatar, Row, Col, message} from "antd";
import {CheckCircleOutlined, LeftOutlined, CloudUploadOutlined} from "@ant-design/icons";

const {Title, Text} = Typography;

function Confirmation(props) {
  const {dataTransaction, handleChangeStep} = props;
  const [fileList, setFileList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const formatRupiah = (amount) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  const styles = {
    wrapper: {padding: 24, display: "flex", justifyContent: "center"},
    card: {
      width: "100%",
      // maxWidth: 820,
      borderRadius: 12,
      // overflow: "hidden",
      background: "#fff",
      border: "1px solid #f0f0f0",
    },
    header: {textAlign: "center", padding: "28px 20px"},
    iconWrap: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 72,
      height: 72,
      borderRadius: 36,
      background: "linear-gradient(135deg,#f0fbf2,#e6f7ff)",
      marginBottom: 12,
    },
    descLabel: {color: "#8c8c8c", fontSize: 13},
    valueEm: {fontSize: 16, fontWeight: 600},
    total: {fontSize: 20, fontWeight: 700, color: "#096dd9"},
    bankRow: {alignItems: "center"},
    upload: {
      padding: 12,
      borderRadius: 8,
      background: "#fafafa",
      border: "1px dashed #e6f7ff",
    },
    actions: {display: "flex", justifyContent: "flex-end", gap: 12},
  };

  const handleUploadChange = ({fileList: newList}) => {
    // keep only last file
    setFileList(newList.slice(-1));
  };

  const defaultBankLogo =
    "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='100%25' height='100%25' fill='%23ffffff'/%3E%3Ctext x='50%25' y='50%25' font-size='14' dominant-baseline='middle' text-anchor='middle' fill='%230096d6' font-family='Arial,sans-serif'%3EBANK%3C/text%3E%3C/svg%3E";

  return (
    <div style={styles.wrapper}>
      {contextHolder}
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconWrap}>
            <CheckCircleOutlined style={{fontSize: 32, color: "#2f855a"}} />
          </div>
          <Title level={4} style={{marginBottom: 6}}>
            Konfirmasi Pembayaran
          </Title>
          <Text type="secondary">Periksa detail lalu unggah bukti transfer</Text>
        </div>

        <Divider style={{margin: 0}} />

        <div style={{padding: 20}}>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label={<span style={styles.descLabel}>Metode Pembayaran</span>}>
              <Row gutter={12} style={styles.bankRow}>
                <Col>
                  <Avatar
                    shape="square"
                    size={48}
                    src={dataTransaction?.rekening?.bankLogo || defaultBankLogo}
                    style={{background: "#fff", border: "1px solid #f0f0f0"}}
                  >
                    {dataTransaction?.rekening?.bankName?.[0]}
                  </Avatar>
                </Col>
                <Col flex="auto">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{fontWeight: 600}}>{dataTransaction?.rekening?.bankName}</div>
                      <div style={{color: "#8c8c8c", fontSize: 13}}>Transfer Bank • Virtual Account</div>
                    </div>
                    <Tag color="blue">Bank</Tag>
                  </div>
                </Col>
              </Row>
            </Descriptions.Item>

            <Descriptions.Item label={<span style={styles.descLabel}>Nama Pemegang Rekening</span>}>
              <Text style={styles.valueEm}>{dataTransaction?.rekening?.accountHolder}</Text>
            </Descriptions.Item>

            <Descriptions.Item label={<span style={styles.descLabel}>Nomor Rekening</span>}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.valueEm}>{dataTransaction?.rekening?.accountNumber}</Text>
                <Button
                  size="small"
                  onClick={() => {
                    const acc = dataTransaction?.rekening?.accountNumber || "";
                    if (!acc) {
                      messageApi.error("Nomor rekening tidak tersedia");
                      return;
                    }
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                      navigator.clipboard.writeText(acc).then(
                        () => messageApi.success("Nomor rekening disalin"),
                        () => messageApi.error("Gagal menyalin nomor rekening"),
                      );
                    } else {
                      // fallback
                      const ta = document.createElement("textarea");
                      ta.value = acc;
                      document.body.appendChild(ta);
                      ta.select();
                      try {
                        document.execCommand("copy");
                        messageApi.success("Nomor rekening disalin");
                      } catch {
                        messageApi.error("Gagal menyalin nomor rekening");
                      }
                      document.body.removeChild(ta);
                    }
                  }}
                >
                  Salin
                </Button>
              </div>
            </Descriptions.Item>

            <Descriptions.Item label={<span style={styles.descLabel}>Detail Biaya</span>}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: 8,
                }}
              >
                <Text type="secondary">Nominal Top Up</Text>
                <Text style={styles.valueEm}>{formatRupiah(dataTransaction?.amount || 0)}</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: 8,
                  marginTop: 6,
                }}
              >
                <Text type="secondary">Tips</Text>
                <Text>{formatRupiah(dataTransaction?.tip || 0)}</Text>
              </div>
              <Divider style={{margin: "12px 0"}} />
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <Text strong style={styles.total}>
                  Total Pembayaran
                </Text>
                <Text strong style={styles.total}>
                  {formatRupiah(dataTransaction?.total || 0)}
                </Text>
              </div>
            </Descriptions.Item>

            <Descriptions.Item label={<span style={styles.descLabel}>Bukti Pembayaran</span>}>
              <Upload.Dragger
                name="file"
                multiple={false}
                accept="image/*,application/pdf"
                beforeUpload={() => false}
                fileList={fileList}
                onChange={handleUploadChange}
                showUploadList={{showPreviewIcon: true, showRemoveIcon: true}}
                style={styles.upload}
              >
                <Space direction="vertical" align="center" style={{width: "100%", padding: 12}}>
                  <CloudUploadOutlined style={{fontSize: 28, color: "#1890ff"}} />
                  <div style={{fontWeight: 600}}>Klik atau tarik file ke sini</div>
                  <Text type="secondary">PNG/JPG/PDF — Maks 1 file. Anda bisa mengganti sebelum konfirmasi.</Text>
                </Space>
              </Upload.Dragger>
            </Descriptions.Item>
          </Descriptions>

          <div style={{marginTop: 18, ...styles.actions}}>
            <Button size="large" onClick={() => handleChangeStep(0)} icon={<LeftOutlined />}>
              Kembali
            </Button>
            <Button type="primary" size="large" disabled={fileList.length === 0} onClick={() => handleChangeStep(2)}>
              Konfirmasi Pembayaran
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
