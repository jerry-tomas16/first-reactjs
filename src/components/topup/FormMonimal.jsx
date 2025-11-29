import { Row, Col, Card, Select, Steps, Button, Space, Divider } from "antd";
import { useState } from "react";
const PREDEFINED_AMOUNTS = [20000, 50000, 100000, 200000, 300000, 500000];
const TIP_OPTIONS = [0, 1000, 2000, 5000, 10000];
const REKENING_LIST = [
  {
    value: "seabank - 1234567890",
    label: "SeaBank - 1234567890",
    bankName: "SeaBank",
    accountNumber: "1234567890",
    accountHolder: "Jery",
  },
  {
    value: "bca - 0987654321",
    label: "BCA - 0987654321",
    bankName: "BCA",
    accountNumber: "0987654321",
    accountHolder: "Jery",
  },
  {
    value: "mandiri - 1122334455",
    label: "Mandiri - 1122334455",
    bankName: "Mandiri",
    accountNumber: "1122334455",
    accountHolder: "Eli",
  },
  {
    value: "bni - 5544332211",
    label: "BNI - 5544332211",
    bankName: "BNI",
    accountNumber: "5544332211",
    accountHolder: "Deni",
  },
];
const RekeningDetails = ({ rekening }) => {
  const selected = REKENING_LIST.find((r) => r.value === rekening);
  if (!selected) return null;

  return (
    <div
      style={{
        marginTop: "16px",
        padding: "16px",
        background: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <Space direction="vertical" size={4}>
        <div style={{ fontWeight: "600" }}>{selected.bankName}</div>
        <div style={{ color: "#666", fontSize: "14px" }}>
          {selected.accountNumber}
        </div>
        <div style={{ color: "#666", fontSize: "14px" }}>
          a.n {selected.accountHolder}
        </div>
      </Space>
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <h3
    style={{
      fontSize: "16px",
      fontWeight: "600",
      color: "#1f1f1f",
      marginBottom: "16px",
    }}
  >
    {children}
  </h3>
);

const SummaryRow = ({ label, value, isTotal = false }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: isTotal ? 0 : "12px",
      fontSize: isTotal ? "18px" : "14px",
      fontWeight: isTotal ? "600" : "400",
      color: isTotal ? "#1f1f1f" : "#666",
    }}
  >
    <span>{label}</span>
    <span style={isTotal ? { color: "#006ca9" } : {}}>
      Rp {value.toLocaleString("id-ID")}
    </span>
  </div>
);
const AmountCard = ({ amount, isSelected, onSelect }) => (
  <div
    onClick={() => onSelect(amount)}
    style={{
      background: isSelected ? "#006ca9" : "#ffffff",
      border: isSelected ? "2px solid #006ca9" : "1px solid #e8e8e8",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.3s",
      color: isSelected ? "#fff" : "#1f1f1f",
    }}
    onMouseEnter={(e) => {
      if (!isSelected) e.currentTarget.style.borderColor = "#006ca9";
    }}
    onMouseLeave={(e) => {
      if (!isSelected) e.currentTarget.style.borderColor = "#e8e8e8";
    }}
  >
    <div style={{ fontSize: "18px", fontWeight: "600" }}>
      Rp {amount.toLocaleString("id-ID")}
    </div>
  </div>
);

function FormMonimal(props) {
  const { handlePaymentClick, isProcessing } = props;
  const [selectedAmount, setSelectedAmount] = useState(20000);
  const [tipAmount, setTipAmount] = useState(0);
  const [selectRekening, setSelectRekening] = useState(null);
  const totalAmount = selectedAmount + tipAmount;

  const handlePayment = () => {
    const payload = {
      amount: selectedAmount,
      tip: tipAmount,
      total: totalAmount,
      rekening: selectRekening,
    };
    handlePaymentClick(payload);
  };
  const handleRekeningChange = (value) => {
    const selected = REKENING_LIST.find((r) => r.value === value);
    setSelectRekening({
      value: value,
      accountNumber: selected?.accountNumber || null,
      bankName: selected?.bankName || null,
      accountHolder: selected?.accountHolder || null,
    });
  };

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <SectionTitle>Pilih Nominal</SectionTitle>
        <Row gutter={[12, 12]}>
          {PREDEFINED_AMOUNTS.map((amount) => (
            <Col xs={12} sm={8} key={amount}>
              <AmountCard
                amount={amount}
                isSelected={selectedAmount === amount}
                onSelect={setSelectedAmount}
              />
            </Col>
          ))}
        </Row>
      </div>

      <Divider />

      <div style={{ marginBottom: "32px" }}>
        <SectionTitle>Metode Pembayaran</SectionTitle>
        <Select
          placeholder="Pilih rekening"
          style={{ width: "100%" }}
          size="large"
          options={REKENING_LIST}
          value={selectRekening?.value}
          onChange={handleRekeningChange}
        />
        <RekeningDetails rekening={selectRekening?.value} />
      </div>

      <Divider />

      <div style={{ marginBottom: "24px" }}>
        <SectionTitle>Tips (Opsional)</SectionTitle>
        <Space wrap>
          {TIP_OPTIONS.map((tip) => (
            <Button
              key={tip}
              type={tipAmount === tip ? "primary" : "default"}
              onClick={() => setTipAmount(tip)}
              style={{ borderRadius: "6px" }}
            >
              {tip === 0 ? "Tidak" : `Rp ${tip.toLocaleString("id-ID")}`}
            </Button>
          ))}
        </Space>
      </div>

      <Divider />

      <div
        style={{
          background: "#fafafa",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      >
        <SummaryRow label="Nominal Top Up" value={selectedAmount} />
        <SummaryRow label="Tips" value={tipAmount} />
        <Divider style={{ margin: "12px 0" }} />
        <SummaryRow label="Total" value={totalAmount} isTotal />
      </div>

      <Button
        type="primary"
        size="large"
        block
        style={{
          height: "48px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
        }}
        onClick={handlePayment}
        disabled={isProcessing}
        loading={isProcessing}
      >
        Bayar Sekarang
      </Button>
    </>
  );
}

export default FormMonimal;
