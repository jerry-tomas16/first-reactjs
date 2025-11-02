import Navigation from "../layouts/Navigation";
import { Row, Col, Button } from "antd";
import ListTable from "../components/menu/TableMenu";
import FormMenu from "../components/menu/FormMenu";
import DetailMenu from "../components/menu/DetailMenu";
import CostumeModal from "../components/CostumeModal";
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [menus, setMenus] = useState([
    {
      kodeMakanan: "NG01",
      restoran: "Restoran A",
      menu: "Nasi Goreng",
      type: "Makanan",
      area_restoran: "Jakarta",
      harga: 20000,
      status: "Tersedia",
    },
  ]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDeleteRow = (record) => {
    const filteredData = menus.filter(
      (item) => item.kodeMakanan !== record.kodeMakanan,
    );
    setMenus(filteredData);
  };

  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Menu"
      >
        <FormMenu setMenus={setMenus} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Menu"
      >
        <DetailMenu makanan={selectedMenu} />
      </CostumeModal>

      <Row align="middle" justify="space-between">
        <Col span={12}>
          <h2>List Menu Makanan</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleOpen}>
            Add Menu
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          <ListTable
            menus={menus}
            onDelete={handleDeleteRow}
            setIsDetailOpen={setIsDetailOpen}
            setSelectedMenu={setSelectedMenu}
          />
        </Col>
      </Row>
    </Navigation>
  );
}
export default Menu;
