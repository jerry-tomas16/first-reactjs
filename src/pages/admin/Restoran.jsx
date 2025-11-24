import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Navigation from "../../layouts/Navigation";
import ListTable from "../../components/Restoran/ListTable";
import FormRestoran from "../../components/Restoran/FormRestoran";
import DetailRestoran from "../../components/Restoran/DetailRestoran";
import CostumeModal from "../../components/CostumeModal";
function Restoran() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedRestoran, setSelectedRestoran] = useState(null);
  const [restorans, setRestorans] = useState([
    {
      kode_restoran: "NG01",
      area_restoran: "Riau",
      nama_restoran: "Surya",
      keterangan: "Rumah Makan Padang",
      image:
        "https://disporabudpar.banjarbarukota.go.id/wp-content/uploads/2017/01/IMG_2542-copy.jpeg",
    },
  ]);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDeleteRow = (record) => {
    const filteredData = restorans.filter(
      (item) => item.kode_restoran !== record.kode_restoran,
    );
    setRestorans(filteredData);
  };
  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Restoran"
      >
        <FormRestoran setRestorans={setRestorans} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Restoran"
      >
        <DetailRestoran restoran={selectedRestoran} />
      </CostumeModal>
      <Row align="middle" justify="space-between">
        <Col span={12}>
          <h2>List Restoran</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleOpen}>
            Add Restoran
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          <ListTable
            restorans={restorans}
            onDelete={handleDeleteRow}
            setIsDetailOpen={setIsDetailOpen}
            setSelectedRestoran={setSelectedRestoran}
          />
        </Col>
      </Row>
    </Navigation>
  );
}
export default Restoran;
