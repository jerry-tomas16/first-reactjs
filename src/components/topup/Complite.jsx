import React from "react";
import {Button, Typography, Row, Col, Space, Tag, Divider, Tooltip} from "antd";
import {CheckCircleTwoTone, PrinterOutlined, DownloadOutlined, HomeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

/**
 * Utility: Build normalized data object from incoming transaction props
 */
function buildReceiptData(tx = {}) {
  const amount = tx.total != null ? Number(tx.total) : 0;
  const currency = tx.currency || "IDR";
  const id = tx.id || "TRX-20251207-001";
  const method = tx.rekening?.bankName || "-";
  const dateObj = tx.date ? new Date(tx.date) : new Date();
  const date = dateObj.toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const recipient = `${tx.rekening?.accountHolder || "-"} - ${tx.rekening?.accountNumber || "-"}`;
  const invoice = tx.invoice || "INV-2025-001";

  return {id, amount, currency, method, date, recipient, invoice};
}

/**
 * Utility: Format number as localized currency
 */
function formatCurrency(amount, currency = "IDR") {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Utility: Prepare a printable window with given element's HTML and basic styles
 */
function openPrintWindow(element) {
  if (!element) return;
  const printWindow = window.open("", "_blank", "width=900,height=700");
  if (!printWindow) return;

  const doc = printWindow.document;
  doc.open();
  doc.write(
    "<!doctype html><html><head><meta charset='utf-8'><title>Bukti Pembayaran</title></head><body></body></html>",
  );
  doc.close();

  // copy <link rel="stylesheet"> and <style> into the new doc head
  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
  styles.forEach((node) => {
    try {
      doc.head.appendChild(node.cloneNode(true));
    } catch (e) {
      // ignore cross-origin or other cloning issues
    }
  });

  // inject the content
  const wrapper = doc.createElement("div");
  wrapper.innerHTML = element.outerHTML;
  doc.body.appendChild(wrapper);

  // minimal print styles
  const style = doc.createElement("style");
  style.innerHTML = `
        @page { size: auto; margin: 12mm; }
        body { -webkit-print-color-adjust: exact; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin: 0; padding: 12px; background: #fff; }
        div[style*="max-width"] { max-width: 920px; margin: 0 auto; }
    `;
  doc.head.appendChild(style);

  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
  }, 500);
}

export default function Complite({dataTransaction}) {
  const navigate = useNavigate();
  const receiptRef = React.useRef(null);

  // memoize normalized data
  const data = React.useMemo(() => buildReceiptData(dataTransaction), [dataTransaction]);

  const formattedAmount = React.useMemo(() => formatCurrency(data.amount, data.currency), [data.amount, data.currency]);

  // styles grouped to improve readability
  const styles = {
    container: {
      maxWidth: 920,
      marginBottom: 20,
      padding: 16,
      border: "1px solid #ccc",
      borderRadius: 12,
    },
    headerTop: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "22px 24px",
      background: "linear-gradient(90deg, rgba(82,196,26,0.12) 0%, rgba(82,196,26,0.06) 60%)",
      borderRadius: 12,
      overflow: "hidden",
    },
    circleIcon: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      background: "linear-gradient(135deg,#52c41a 0%, #95e28a 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 18px rgba(82,196,26,0.18)",
      color: "#fff",
      fontSize: 36,
    },
    titleGroup: {flex: 1},
    title: {margin: 0, color: "#102027", fontWeight: 700},
    subtitle: {margin: 0, color: "#56636a", fontSize: 14},
    contentCard: {marginTop: 16, borderRadius: 12},
    infoLabel: {color: "#77858a", fontSize: 13},
    amountCard: {
      borderRadius: 10,
      textAlign: "center",
      background: "rgba(250,250,250,0.9)",
      padding: 18,
    },
    amountText: {margin: 0, color: "#102027"},
    smallMuted: {color: "#7b8089", fontSize: 13},
  };

  // Handlers
  const handlePrint = React.useCallback(() => {
    openPrintWindow(receiptRef.current);
  }, []);

  const handleDownload = React.useCallback(() => {
    const content = [
      "Bukti Pembayaran",
      "",
      `Transaksi: ${data.id}`,
      `Invoice: ${data.invoice}`,
      `Jumlah: ${formattedAmount}`,
      `Tanggal: ${data.date}`,
      `Penerima: ${data.recipient}`,
    ].join("\n");

    const blob = new Blob([content], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.id}-bukti.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [data, formattedAmount]);

  return (
    <div style={styles.container} ref={receiptRef}>
      <div style={styles.headerTop}>
        <div style={styles.circleIcon}>
          <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize: 40}} />
        </div>

        <div style={styles.titleGroup}>
          <Typography.Title level={4} style={styles.title}>
            Pembayaran Berhasil
          </Typography.Title>
          <Typography.Text style={styles.subtitle}>
            Terima kasih — pembayaran Anda sedang diproses dan menunggu konfirmasi.
          </Typography.Text>
        </div>

        <Space direction="vertical" size="small" style={{textAlign: "right"}}>
          <Typography.Text style={{fontSize: 12, color: "#7b8089"}}>Total Dibayar</Typography.Text>
          <Typography.Title level={3} style={{margin: 0, color: "#52c41a"}}>
            {formattedAmount}
          </Typography.Title>
        </Space>
      </div>

      <div style={styles.contentCard}>
        <Row gutter={[24, 16]}>
          <Col xs={24} md={16}>
            <Row gutter={[12, 8]}>
              <Col span={12}>
                <div style={styles.infoLabel}>Nomor Transaksi</div>
                <div style={{fontWeight: 600}}>{data.id}</div>
              </Col>

              <Col span={12}>
                <div style={styles.infoLabel}>Invoice</div>
                <div>{data.invoice}</div>
              </Col>

              <Col span={12}>
                <div style={styles.infoLabel}>Tanggal & Waktu</div>
                <div>{data.date}</div>
              </Col>

              <Col span={12}>
                <div style={styles.infoLabel}>Metode Pembayaran</div>
                <div>{data.method}</div>
              </Col>

              <Col span={24}>
                <div style={styles.infoLabel}>Penerima</div>
                <div>{data.recipient}</div>
              </Col>
            </Row>
          </Col>

          <Col xs={24} md={8}>
            <div style={styles.amountCard}>
              <div style={styles.smallMuted}>Ringkasan</div>
              <Typography.Title level={3} style={{...styles.amountText, color: "#52c41a"}}>
                {formattedAmount}
              </Typography.Title>
              <div style={{marginTop: 10}}>
                <Tag color="#52c41a">Berhasil</Tag>
              </div>
            </div>

            <Divider />

            <Space direction="vertical" style={{width: "100%"}}>
              <Tooltip title="Unduh bukti pembayaran (PDF)">
                <Button
                  block
                  type="default"
                  icon={<DownloadOutlined />}
                  onClick={handleDownload}
                  style={{color: "#52c41a", borderColor: "#52c41a"}}
                >
                  Unduh Bukti
                </Button>
              </Tooltip>

              <Tooltip title="Cetak halaman bukti">
                <Button
                  block
                  icon={<PrinterOutlined />}
                  onClick={handlePrint}
                  style={{color: "#52c41a", borderColor: "#52c41a"}}
                  type="default"
                >
                  Cetak
                </Button>
              </Tooltip>

              <Button
                block
                icon={<HomeOutlined />}
                onClick={() => navigate("/katalog")}
                style={{
                  background: "#52c41a",
                  borderColor: "#52c41a",
                  color: "#fff",
                }}
                type="primary"
              >
                Kembali ke Beranda
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}
