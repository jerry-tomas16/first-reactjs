import React, { useState } from "react";
import { Row, Col, Button, Input,Select, Card, Space, Typography } from "antd";
import { 
  PlusOutlined,
  SearchOutlined,
  FilterOutlined, } from "@ant-design/icons";
import Navigation from "../../layouts/Navigation";
import CostumeModal from "../..components/CostumeModal";
import DetailRekening from "../..components/Rekening/DetailRekening";
import FormRekening from "../..components/Rekening/FormRekening";
import ListRekening from "../..components/Rekening/ListRekening";
import EditRekening from "../..components/Rekening/EditRekening";
const { Title } = Typography;

function Rekening() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedRekening, setSelectedRekening] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [searchText,setSearchText] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [rekenings, setRekenings] = useState([
        {
            nama_bank: "BCA",
            nama_pemilik: "Jeri",
            nomer_rekening: "5470058295",
            status: "Aktif"
        },
    ]);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleDeleteRow = (record) => {
        const filteredData = rekening.filter(
            (item) => item.nama_bank !== record.nama_bank
        );
        ss(filteredData);
    };
    const filteredRekenings = rekening.filter((rekening) => {
        const matchesSearch =
        rekening.nama_bank.toLowerCase().includes(searchText.toLowerCase()) ||
        rekening.nama_pemilik.toLowerCase().includes(searchText.toLowerCase());
    const filterStatus =
      filterStatus === "all" || rekening.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
    const handleUpdatedata = (record) => {
        const updatedRekenings = rekenings.map((rekening) => 
        rekening.nama_bank === record.nama_bank ? record : rekening,
    );
    setRekenings(updatedRekenings);
    };
    return (
        <Navigation>
            <CostumeModal
            isModalOpen={isOpen}
            setIsModalOpen={setIsOpen}
            title="Form Rekening"
            width={700}
            >
            <FormRekening setRekenings={setRekenings} setIsModalOpen={setIsOpen}/>
            </CostumeModal>
            <CostumeModal
            isModalOpen={isDetailOpen}
            setIsModalOpen={setIsDetailOpen}
            title="Detail Rekening"
            >
           <DetailRekening rekening={selectedRekening} />
              </CostumeModal>
              <CostumeModal
                isModalOpen={openEditModal}
                setIsModalOpen={setOpenEditModal}
                title="Edit Rekening"
                width={700}
              >
            <FormEdit
              setRekenings={setRekenings}
              selectedRekening={selectedRekening}
              setIsModalOpen={setOpenEditModal}
              handleUpdatedata={(record) => {
              handleUpdatedata(record);
            }}
            />
            </CostumeModal>
            <div style={{ padding: "6px" }}>
                    {/* Header Section */}
                    <Row
                      align="middle"
                      justify="space-between"
                      style={{ marginBottom: 24 }}
                    >
                      <Col>
                        <Title level={3} style={{ margin: 0 }}>
                          Data Rekening
                        </Title>
                        <p style={{ color: "#8c8c8c", margin: "4px 0 0 0" }}>
                          Kelola data Rekening
                        </p>
                      </Col>
                      <Col>
                        <Button
                          type="primary"
                          icon={<PlusOutlined />}
                          onClick={handleOpen}
                          size="large"
                          style={{ borderRadius: "8px" }}
                        >
                          Tambah Rekening
                        </Button>
                      </Col>
                    </Row>
                     {/* Filter Section */}
        <Card
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "8px",
            marginBottom: 20,
          }}
          bodyStyle={{ padding: "16px" }}
        >
          <Row gutter={[12, 12]} align="middle">
            <Col flex="auto">
              <Space size="middle" style={{ width: "100%" }}>
                <Input
                  placeholder="Cari berdasarkan nama atau email..."
                  prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
                  value={searchText}
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
                  <Select.Option value="Aktif">
                    Aktif
                  </Select.Option>
                  <Select.Option value="In Aktif">
                    In Aktif
                  </Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{ color: "#8c8c8c" }}>
                Total: <strong>{filteredRekenigs.length}</strong> karyawan
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}
        <ListTable
          rekenings={filteredRekenigs}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedRekening={setSelectedRekening}
          setOpenEditModal={setOpenEditModal}
        />
      </div>
    </Navigation>
    );

}




export default Rekening;