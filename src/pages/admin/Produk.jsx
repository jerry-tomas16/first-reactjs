import React, { useState } from "react";
import { Row, Col, Button, Input, Select, Card, Space, Typography } from "antd";
import {PlusOutlined, SearchOutlined, FilterOutlined,} from "@ant-design/icons";
import Navigation from "../../layouts/Navigation";
import CostumeModal from "../../components/CostumeModal";
import ListProduk from "../../components/Produk/ListProduk";
import FormProduk from "../../components/Produk/FormProduk";
import DetailProduk from "../../components/Produk/DetailProduk";
const { Title } = Typography;
function Produk() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProduk, setSelectedProduk] = useState (null);
  const [searchText, setSearchText] = useState("");
  const [filterKategory, setFilterKategory] = useState("all");
  const [produks, setProduks] = useState([
    {
      kode_produk: "16",
      nama_produk: "Tessa",
      jumlah: "25",
      deskripsi: "Tisu Pengesat",
      kategory: "Non Food",
    },
    {
      kode_produk: "17",
      nama_produk: "Kapal api",
      jumlah: "4",
      deskripsi: "Kopi",
      kategory: "Food",
    },
  ]);
  
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    const filteredData = produks.filter(
      (item) => item.kode_produk !== record.kode_produk,
    );
    setProduks(filteredData);
  };
  const filteredProduks = produks.filter((produk) => {
    const matchesSearch =
      produk.kode_produk.toLowerCase().includes(searchText.toLowerCase()) ||
      produk.nama_makanan.toLowerCase().includes(searchText.toLowerCase());
    const matchesKategory =
      filterKategory === "all" || produk.kategory === filterKategory;
    return matchesSearch && matchesKategory;
  });
  console.log(filteredProduks);
  console.log(produks)
  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Produk"
        width={700}
      >
        <FormProduk setProduks={setProduks} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Produk"
      >
        <DetailProduk produk={selectedProduk} />
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
                    List produk
                  </Title>
                  <p style={{ color: "#8c8c8c", margin: "4px 0 0 0" }}>
                    List produk
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
                    Add Produk
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
                        placeholder="Cari berdasarkan kategory ..."
                        prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        style={{ width: 300, borderRadius: "6px" }}
                        allowClear
                        size="large"
                      />
                      <Select
                        value={filterKategory}
                        onChange={setFilterKategory}
                        style={{ width: 180, borderRadius: "6px" }}
                        size="large"
                        suffixIcon={<FilterOutlined />}
                      >
                        <Select.Option value="all">Semua Kategory</Select.Option>
                        <Select.Option value="Food">Food</Select.Option>
                        <Select.Option value="Non Food">
                          Non Food
                        </Select.Option>
                      </Select>
                    </Space>
                  </Col>
                  <Col>
                    <span style={{ color: "#8c8c8c" }}>
                      Total: <strong>{filteredProduks.length}</strong> menu
                    </span>
                  </Col>
                </Row>
              </Card>
          {/* Table Section */ }
          <ListProduk
            produks={filteredProduks}
            onDelete={handleDeleteRow}
            setIsDetailOpen={setIsDetailOpen}
            setSelectedProduk={setSelectedProduk}
          />
       </div>
    </Navigation>
  );
}

export default Produk;
