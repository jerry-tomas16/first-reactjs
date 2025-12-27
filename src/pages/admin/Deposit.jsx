import React, { useState } from "react";
import { Row, Col, Button, Input, Select, Card, Space, Typography } from "antd";
import { PlusOutlined, SeachOutlined, FilterOutlined } from "@ant-design/icons";
import Navigation from "../../layouts/Navigation";
import CostumeModal from "../../components/CostumeModal";
import DetailDeposit from "../../components/deposit/DetailDeposit";
import ListDeposit from "../../components/deposit/ListDeposit";
import EditDeposit from "../../components/deposit/EditDeposit";
const { Title } = Typography;

function Deposit() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [deposits, setDeposits] = useState([
    {
      userId: "1234",
      userName: "Habib Rahmat",
      nominal: "200000",
      nominal_tips: "5000",
      bank_name: "BCA",
      rekening_name: "Jeri",
      rekening_id: "5470058295",
      bukti_img: "",
      status: "sukses",
    },
  ]);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    const filteredData = deposits.filter(
      (item) => item.userId !== record.userId,
    );
    setDeposits(filteredData);
  };
  const filteredDeposits = deposits.filter((deposit) => {
    const matchesSearch =
      deposit.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      deposit.rekening_id.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || deposit.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const handleUpdatedata = (record) => {
    const updateDeposits = deposits.map((deposit) =>
      deposit.rekening_id === record.rekening_id ? record : deposit,
    );
    setDeposits(updateDeposits);
  };
  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Deposit"
      >
        <DetailDeposit deposit={selectedDeposit} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={openEditModal}
        setIsModalOpen={setOpenEditModal}
        title="Edit Deposit"
        width={700}
      >
        <EditDeposit
          setDeposits={setDeposits}
          selectedDeposit={selectedDeposit}
          setIsModalOpen={setOpenEditModal}
          handleUpdatedata={(record) => {
            handleUpdatedata(record);
          }}
        />
      </CostumeModal>
      <div style={{ pading: "6px" }}>
        {/* Header Section */}
        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={3} style={{ margin: 0 }}>
              Data Deposit
            </Title>
            <p style={{ color: "#8c8c8c", margin: "4px 0 0 0" }}>
              Kelola Data Deposit
            </p>
          </Col>
          <Col>
            <Button
              type="prmary"
              icon={<PlusOutlined />}
              onClick={handleOpen}
              size="large"
              style={{ borderRadius: "8px" }}
            >
              Tambah Deposit
            </Button>
          </Col>
        </Row>
        {/* Filter Section */}
        <Card
          style={{
            background: "#fafafa",
            borderRadius: "8px",
            marginBottom: 20,
          }}
          bodyStyle={{ padding: "16px" }}
        >
          <Row getter={[12, 12]} align="midle">
            <Col flex="auto">
              <Space size="midle" style={{ width: "100%" }}>
                <Input
                  placeholder="cara berdasarkan userId atau Rekening..."
                  prefix={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{ width: 300, borderRadius: "6px" }}
                  allowClear
                  size="large"
                />
                <Select
                  value={filterStatus}
                  onChange={setFilterStatus}
                  style={{ width: 180, borderRadius: "6px" }}
                  size="large"
                  suffixIcon={<FilterOutlined />}
                >
                  <Select.Option value="all">Semua Status</Select.Option>
                  <Select.Option value="Sukses">Sukses</Select.Option>
                  <Select.Option value="Gagal">Gagal</Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{ color: "#8c8c8c" }}>
                Total: <strong>{filteredDeposits.length}</strong> Deposit
              </span>
            </Col>
          </Row>
        </Card>
        {/* Table Section */}
        <ListDeposit
          deposits={filteredDeposits}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedDeposit={setSelectedDeposit}
          setOpenEditModal={setOpenEditModal}
        />
      </div>
    </Navigation>
  );
}

export default Deposit;
