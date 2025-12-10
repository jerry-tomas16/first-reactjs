import React, { useState } from "react";
import { Row, Col, Button, Input, Select, Card, Space, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Navigation from "../../layouts/Navigation";
import ListTable from "../../components/Restoran/ListTable";
import FormRestoran from "../../components/Restoran/FormRestoran";
import DetailRestoran from "../../components/Restoran/DetailRestoran";
import EditRestoran from "../../components/Restoran/EditRestoran";
import CostumeModal from "../../components/CostumeModal";
const { Title } = Typography;
function Restoran() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedRestoran, setSelectedRestoran] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [restorans, setRestorans] = useState([
    {
      kode_restoran: "NG01",
      area_restoran: "Riau",
      nama_restoran: "Surya",
      keterangan: "aktif",
      image:
        "https://disporabudpar.banjarbarukota.go.id/wp-content/uploads/2017/01/IMG_2542-copy.jpeg",
    },
  ]);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const [searchText, setSearchText] = useState("");
  const [filterKeterangan, setFilterKeterangan] = useState("all");

  const filteredRestorans = restorans.filter((restoran) => {
    const matchesSearch =
      restoran.kode_restoran.toLowerCase().includes(searchText.toLowerCase()) ||
      restoran.nama_restoran.toLowerCase().includes(searchText.toLowerCase());
    const matchesKeterangan =
      filterKeterangan === "all" || restoran.keterangan === filterKeterangan;
    return matchesSearch && matchesKeterangan;
  });
  console.log(filteredRestorans);
  const handleDeleteRow = (record) => {
    const filteredData = restorans.filter(
      (item) => item.kode_restoran !== record.kode_restoran
    );
    setRestorans(filteredData);
  };
  const handleUpdatedata = (record) => {
    const updateRestoran = restorans.map((restoran) =>
      restoran.kode_restoran === record.kode_restoran ? record : restoran
    );
    setRestorans(updateRestoran);
  };

  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Restoran"
        width={700}
      >
        <FormRestoran setRestorans={setRestorans} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isEditOpen}
        setIsModalOpen={setIsEditOpen}
        title="Edit Restoran"
        width={700}
      >
        <EditRestoran
          setRestorans={setRestorans}
          selectedRestoran={selectedRestoran}
          setIsModalOpen={setIsEditOpen}
          handleUpdate={(record) => {
            handleUpdatedata(record);
          }}
        />
      </CostumeModal>

      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Restoran"
      >
        <DetailRestoran restoran={selectedRestoran} />
      </CostumeModal>
      <div style={{ padding: "6px" }}>
        {/* Header Section */}
        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={4} style={{ margin: "4px 0 0 0" }}>
              List Restoran
            </Title>
            <p style={{ color: "#8c8c8c", margin: "4px 0 0 0" }}>
              List nama restoran
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
              Add Restoran
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
                  placeholder="Cari berdasarkan keterangan restoran..."
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
                  <Select.Option value="all">Semua</Select.Option>
                  <Select.Option value="aktif">aktif</Select.Option>
                  <Select.Option value="tidak aktif">tidak aktif</Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{ color: "#8c8c8c" }}>
                Total: <strong>{filteredRestorans.length}</strong> restoran
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}

        <ListTable
          restorans={filteredRestorans}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedRestoran={setSelectedRestoran}
          setIsEditOpen={setIsEditOpen}
        />
      </div>
    </Navigation>
  );
}
export default Restoran;
