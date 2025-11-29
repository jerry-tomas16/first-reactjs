import LandingPage from "../../components/web/LandingPage.jsx";
import { Row, Col, Card, Steps } from "antd";
import { useState } from "react";
import FormMonimal from "../../components/topup/FormMonimal.jsx";
import Confirmation from "../../components/topup/Confirmation.jsx";
import {
  CreditCardOutlined,
  WalletOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const STEPS_CONFIG = [
  { title: "Pilih Nominal", icon: <WalletOutlined /> },
  { title: "Konfirmasi", icon: <CreditCardOutlined /> },
  { title: "Selesai", icon: <CheckCircleOutlined /> },
];

export default function TopupSaldo() {
  const [current, setCurrent] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dataTransaction, setDataTransaction] = useState(null);

  const handlePaymentClick = (value) => {
    console.log("cek", value);
    setDataTransaction(value);
    setIsProcessing(true);
    setTimeout(() => {
      handleChangeStep(current + 1);
      setIsProcessing(false);
    }, 2000);
  };
  const handleChangeStep = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <LandingPage pageTitle="Topup Saldo">
      <div
        style={{
          padding: "40px 20px",
          background: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Card
              bordered={false}
              style={{
                borderRadius: "12px",
                marginBottom: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <Steps current={current} items={STEPS_CONFIG} size="small" />
            </Card>

            <Card
              bordered={false}
              style={{
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {current === 0 && (
                <>
                  <FormMonimal
                    handlePaymentClick={handlePaymentClick}
                    isProcessing={isProcessing}
                  />
                </>
              )}
              {current === 1 && (
                <Confirmation
                  dataTransaction={dataTransaction}
                  handleChangeStep={handleChangeStep}
                />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </LandingPage>
  );
}
