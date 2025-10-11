import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Navigation from "../layouts/Navigation";
import ListTable from "../components/ListTable";

import CostumeModal from "../components/CostumeModal";
function HalamanUtama() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <Navigation>
      <CostumeModal isModalOpen={isOpen} setIsModalOpen={setIsOpen} />
      <Row align="middle" justify="space-between">
        <Col>
          <h2>List Employee</h2>
        </Col>
        <Col>
          <Button type="primary" onClick={handleOpen}>
            Add Employee
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          <ListTable />
        </Col>
      </Row>
    </Navigation>
  );
}
export default HalamanUtama;
