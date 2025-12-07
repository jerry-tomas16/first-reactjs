import React, { useState } from "react";
import { Row, Col, Button, Input, Select, Card, Space, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Navigation from "../../layouts/Navigation";
import CostumeModal from "../../components/CostumeModal";
import ListStok from "../../components/StokOpname/ListStok";
import FormStok from "../../components/StokOpname/FormStok";
import DetailStok from "../../components/StokOpname/DetailStok";
import EditStok from "../../components/StokOpname/EditStok";

const { Title } = Typography;
function StokOpname() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedStokOpname, setSelectedStokOpname] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [stokopnames, setStokOpnames] = useState([
    {
      Category: "Food / Non Food",
      KodeBarang: "023",
      NamaBarang: "Kopi",
      Quantity: "3",
      Keterangan: "ok",
    },
  ]);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const [searchText, setSearchText] = useState("");
  const [filterKeterangan, setFilterKeterangan] = useState("all");

  const filteredStokOpnames = stokopnames.filter((stokopname) => {
    const matchesSearch =
      stokopname.KodeBarang.toLowerCase().includes(searchText.toLowerCase()) ||
      stokopname.NamaBarang.toLowerCase().includes(searchText.toLowerCase());
    const matchesKeterangan =
      filterKeterangan === "all" || stokopname.Keterangan === filterKeterangan;
    return matchesSearch && matchesKeterangan;
  });
  console.log(filteredStokOpnames);
  const handleDeleteRow = (record) => {
    const filteredData = stokopnames.filter(
      (item) => item.KodeStokOpname !== record.KodeStokOpname,
    );
    setStokOpnames(filteredData);
  };
  const handleUpdatedata = (record) => {
    const updateStokOpname = stokopnames.map((stokopname) =>
      stokopname.KodeBarang === record.KodeBarang ? record : stokopname,
    );
    setStokOpnames(updateStokOpname);
  };

  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Stok"
        width={700}
      >
        <FormStok setStokOpnames={setStokOpnames} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isEditOpen}
        setIsModalOpen={setIsEditOpen}
        title="Edit Stok"
        width={700}
      >
        <EditStok
          setStokOpnames={setStokOpnames}
          selectedStokOpname={selectedStokOpname}
          setIsModalOpen={setIsEditOpen}
          handleUpdate={(record) => {
            handleUpdatedata(record);
          }}
        />
      </CostumeModal>

      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail StokOpname"
      >
        <DetailStok stokopname={selectedStokOpname} />
      </CostumeModal>
      <div style={{ padding: "6px" }}>
        {/* header Section */}
        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={4} style={{ margin: "4px 0 0 0" }}>
              List StokOpname
            </Title>
            <p style={{ color: "#8c8c8c", margin: "4px 0 0 0" }}>
              List Stok barang
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
              Add StokOpname
            </Button>
          </Col>
        </Row>
        {/* Header Seaction */}
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
                  value={filterKeterangan}
                  onChange={setFilterKeterangan}
                  style={{ width: 180, borderRadius: "6px" }}
                  size="large"
                  suffixIcon={<FilterOutlined />}
                >
                  <Select.Option value="all">Semua Status</Select.Option>
                  <Select.Option value="Tersedia">Tersedia</Select.Option>
                  <Select.Option value="Tidak Tersedia">
                    Tidak Tersedia
                  </Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{ color: "#8c8c8c" }}>
                Total: <strong>{filteredStokOpnames.length}</strong> stokopname
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}
        <ListStok
          stokopnames={stokopnames}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedStokOpname={setSelectedStokOpname}
          setIsEditOpen={setIsEditOpen}
        />
      </div>
    </Navigation>
  );
}

export default StokOpname;
