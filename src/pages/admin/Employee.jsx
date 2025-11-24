import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Navigation from "../../layouts/Navigation";
import ListTable from "../../components/employee/ListTable";
import FormEmployee from "../../components/employee/FormEmployee";
import DetailEmployee from "../../components/employee/DetailEmployee";
import CostumeModal from "../../components/CostumeModal";

function Employee() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
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
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    const filteredData = employees.filter(
      (item) => item.email !== record.email,
    );
    setEmployees(filteredData);
  };

  return (
    <Navigation>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Karyawan"
        width={700}
      >
        <FormEmployee setEmployees={setEmployees} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Employee"
      >
        <DetailEmployee employee={selectedEmployee} />
      </CostumeModal>
      <Row align="middle" justify="space-between">
        <Col span={12}>
          <h2>List Karyawan</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleOpen}>
            Tambah Karyawan
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 4 }}>
          <ListTable
            employees={employees}
            onDelete={handleDeleteRow}
            setIsDetailOpen={setIsDetailOpen}
            setSelectedEmployee={setSelectedEmployee}
          />
        </Col>
      </Row>
    </Navigation>
  );
}
export default Employee;
