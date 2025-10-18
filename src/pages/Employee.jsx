import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Navigation from "../layouts/Navigation";
import ListTable from "../components/ListTable";
import FormEmployee from "../components/employee/FormEmployee";

import CostumeModal from "../components/CostumeModal";

function Employee() {
  const [isOpen, setIsOpen] = useState(false);
  const [employees, setEmployees] = useState([
    {
      name: "John Brown",
      email: "john.brown@example.com",
      usia: 32,
      jenis_kelamin: "Laki-laki",
      pendidikan: "S1",
      status: "Single",
    },
  ]);
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Employee"
      >
        <FormEmployee setEmployees={setEmployees} setIsModalOpen={setIsOpen} />
      </CostumeModal>

      <Row align="middle" justify="space-between">
        <Col span={12}>
          <h2>List Employee</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleOpen}>
            Add Employee
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          <ListTable employees={employees} />
        </Col>
      </Row>
    </Navigation>
  );
}
export default Employee;
