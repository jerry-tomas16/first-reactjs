import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Avatar,
  Typography,
  Tag,
  Image,
  Space,
  Divider,
  Tooltip,
  Statistic,
  Button,
  Modal,
} from "antd";
import {
  UserOutlined,
  BankOutlined,
  FileImageOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  DownloadOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

function InfoRow({ label, children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "8px 0",
      }}
    >
      <div style={{ color: "#666" }}>{label}</div>
      <div style={{ fontWeight: 700, textAlign: "right" }}>{children}</div>
    </div>
  );
}

export default function DetailDepositV3(props) {
  const { deposit, setIsModalOpen } = props;
  const [previewVisible, setPreviewVisible] = useState(false);
  if (!deposit || Object.keys(deposit).length === 0) return null;

  const {
    userName,
    nominal,
    nominal_tips,
    bank_name,
    rekening_name,
    rekening_id,
    bukti_img,
    status,
  } = deposit;

  const initials =
    (userName || "")
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?";

  const fmt = (v) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(Number(v) || 0);

  const n = Number(nominal) || 0;
  const t = Number(nominal_tips) || 0;
  const total = n + t;

  const statusKey = (status || "").toLowerCase();
  const statusMeta =
    statusKey === "sukses"
      ? { color: "#52c41a", icon: <CheckCircleOutlined />, text: "Sukses" }
      : statusKey === "gagal"
      ? { color: "#ff4d4f", icon: <CloseCircleOutlined />, text: "Gagal" }
      : {
          color: "#faad14",
          icon: <ClockCircleOutlined />,
          text: status || "Menunggu",
        };

  const downloadImage = (url) => {
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = "bukti-transfer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <>
      <Card
        style={{
          maxWidth: 980,
          margin: "28px auto",
          borderRadius: 12,
          boxShadow: "0 12px 40px rgba(15,20,40,0.06)",
          border: "none",
          overflow: "hidden",
        }}
      >
        {/* Header: summary */}
        <Row align="middle" gutter={[16, 16]}>
          <Col>
            <Avatar
              size={72}
              style={{
                background: "linear-gradient(135deg,#4b6cff,#7b61ff)",
                fontSize: 22,
                boxShadow: "0 8px 24px rgba(75,108,255,0.12)",
              }}
            >
              {userName ? initials : <UserOutlined />}
            </Avatar>
          </Col>

          <Col flex="auto">
            <Typography.Title level={4} style={{ margin: 0 }}>
              {userName || "-"}
            </Typography.Title>
            <Space size={8} style={{ marginTop: 6 }}>
              <Tag icon={<BankOutlined />} color="default">
                {bank_name || "-"}
              </Tag>
              <Tooltip
                title={
                  rekening_name
                    ? `${rekening_name} • ${rekening_id || "-"}`
                    : rekening_id || "-"
                }
              >
                <Typography.Text
                  type="secondary"
                  ellipsis
                  style={{ maxWidth: 300 }}
                >
                  {rekening_name
                    ? `${rekening_name} • ${rekening_id}`
                    : rekening_id || "-"}
                </Typography.Text>
              </Tooltip>
            </Space>
          </Col>

          <Col style={{ textAlign: "right" }}>
            <Tag
              icon={statusMeta.icon}
              style={{
                background: `${statusMeta.color}1f`,
                color: statusMeta.color,
                borderRadius: 16,
                padding: "6px 12px",
                fontWeight: 700,
              }}
            >
              {statusMeta.text}
            </Tag>

            <div style={{ marginTop: 8 }}>
              <div style={{ color: "#0b5ed7", fontWeight: 800, fontSize: 20 }}>
                {fmt(total)}
              </div>
              <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                Nominal {fmt(n)} · Tips {fmt(t)}
              </Typography.Text>
            </div>
          </Col>
        </Row>

        <Divider style={{ margin: "18px 0" }} />

        {/* Content: details + bukti */}
        <Row gutter={[20, 20]}>
          <Col xs={24} md={14}>
            <Typography.Text type="secondary">Detail Transfer</Typography.Text>

            <Card
              size="small"
              style={{
                borderRadius: 10,
                background: "#fff",
                boxShadow: "inset 0 1px 0 rgba(16,24,40,0.02)",
                padding: 16,
                border: "1px solid rgba(0,0,0,0.04)",
                marginTop: 10,
                height: 200,
              }}
            >
              <InfoRow label="Nama Rekening">{rekening_name || "-"}</InfoRow>
              <InfoRow label="Nomor Rekening">{rekening_id || "-"}</InfoRow>
              <InfoRow label="Bank">{bank_name || "-"}</InfoRow>
            </Card>
          </Col>

          <Col xs={24} md={10}>
            <div>
              <Typography.Text type="secondary">Bukti Transfer</Typography.Text>

              <div style={{ marginTop: 10 }}>
                {bukti_img ? (
                  <div
                    onClick={() => setPreviewVisible(true)}
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      cursor: "pointer",
                      boxShadow: "0 10px 30px rgba(16,24,40,0.06)",
                    }}
                  >
                    <Image
                      src={bukti_img}
                      alt="bukti"
                      preview={false}
                      width="100%"
                      height={200}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                      border: "1px dashed #e6e6e6",
                      background: "#fafafa",
                      color: "#999",
                    }}
                  >
                    <FileImageOutlined
                      style={{ fontSize: 34, marginRight: 8 }}
                    />
                    Tidak ada gambar
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Full preview modal */}
      <Modal
        open={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
        centered
        bodyStyle={{ padding: 12, background: "#f7f8fa" }}
      >
        {bukti_img ? (
          <Image
            src={bukti_img}
            alt="Preview Bukti"
            style={{ width: "100%" }}
          />
        ) : (
          <div style={{ textAlign: "center", padding: 40, color: "#666" }}>
            Tidak ada gambar
          </div>
        )}
      </Modal>

      <Row justify="end" gutter={[8, 8]} style={{ marginTop: 18 }}>
        <Col>
          <Button onClick={() => setIsModalOpen(false)}>Back</Button>
        </Col>
        <Col>
          <Button
            danger
            icon={<CloseCircleOutlined />}
            onClick={() =>
              Modal.confirm({
                title: "Konfirmasi Reject",
                icon: <ExclamationCircleOutlined />,
                content: "Apakah Anda yakin ingin menolak deposit ini?",
                okText: "Ya",
                cancelText: "Batal",
                onOk: () => {
                  console.log("reject", deposit);
                },
              })
            }
          >
            Reject
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<CheckCircleOutlined />}
            style={{ background: "#52c41a", borderColor: "#52c41a" }}
            onClick={() =>
              Modal.confirm({
                title: "Konfirmasi Approve",
                icon: <ExclamationCircleOutlined />,
                content: "Apakah Anda yakin ingin menyetujui deposit ini?",
                okText: "Ya",
                cancelText: "Batal",
                onOk: () => {
                  console.log("approve", deposit);
                },
              })
            }
          >
            Approve
          </Button>
        </Col>
      </Row>
    </>
  );
}
