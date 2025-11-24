import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Navigation from "../../layouts/Navigation";
import CostumeModal from "../../components/CostumeModal";
import ListProduk from "../../components/Produk/ListProduk";
import FormProduk from "../../components/Produk/FormProduk";
import DetailProduk from "../../components/Produk/DetailProduk";

function Produk() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [produks, setProduks] = useState([
    {
      kode_produk: "16",
      nama_produk: "Tessa",
      jumlah: "25",
      deskripsi: "Tisu Pengesat",
      kategory: "Non Food",
    },
  ]);
  const [selectedProduk, setSelectedProduk] = useState(null);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    const filteredData = produks.filter(
      (item) => item.kode_produk !== record.kode_produk,
    );
    setProduks(filteredData);
  };

  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Produk"
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
      <Row align="middle" justify="space-between">
        <Col span={12}>
          <h2>List Produk</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleOpen}>
            Add Produk
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          <ListProduk
            produks={produks}
            onDelete={handleDeleteRow}
            setIsDetailOpen={setIsDetailOpen}
            setSelectedProduk={setSelectedProduk}
          />
        </Col>
      </Row>
    </Navigation>
  );
}

export default Produk;
