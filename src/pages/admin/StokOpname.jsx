import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Navigation from "../../layouts/Navigation";
import CostumeModal from "../../components/CostumeModal";
import ListStok from "../../components/StokOpname/ListStok";
import FormStok from "../../components/StokOpname/FormStok";
import DetailStok from "../../components/StokOpname/DetailStok";

function StokOpname() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [stokopnames, setStokOpnames] = useState([
    {
      Category: "Food / Non Food",
      KodeBarang: "023",
      NamaBarang: "Kopi",
      Quantity: "3",
      Keterangan: "ok",
    },
  ]);
  const [selectedStokOpname, setSelectedStokOpname] = useState(null);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    const filteredData = stokopnames.filter(
      (item) => item.KodeStokOpname !== record.KodeStokOpname,
    );
    setStokOpnames(filteredData);
  };

  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Stok"
      >
        <FormStok setStokOpnames={setStokOpnames} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail StokOpname"
      >
        <DetailStok stokopname={selectedStokOpname} />
      </CostumeModal>
      <Row align="middle" justify="space-between">
        <Col span={12}>
          <h2>List StokOpname</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleOpen}>
            Add StokOpname
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          <ListStok
            stokopnames={stokopnames}
            onDelete={handleDeleteRow}
            setIsDetailOpen={setIsDetailOpen}
            setSelectedStokOpname={setSelectedStokOpname}
          />
        </Col>
      </Row>
    </Navigation>
  );
}

export default StokOpname;
