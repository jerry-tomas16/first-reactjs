import React, { useState } from "react";
import { Row, Col, Button, Input, Select, Card, Space, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Navigation from "../../layouts/Navigation";
import ListTable from "../../components/employee/ListTable";
import FormEmployee from "../../components/employee/FormEmployee";
import DetailEmployee from "../../components/employee/DetailEmployee";
import CostumeModal from "../../components/CostumeModal";

const { Title } = Typography;

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
      status_pernikahan: "Menikah",
      alamat: "Jl. Merdeka No. 123, Jakarta",
      jabatan: "Software Engineer",
      status_kerja: "Karyawan Tetap",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      usia: 38,
      jenis_kelamin: "Perempuan",
      pendidikan: "S2",
      status_pernikahan: "Single",
      alamat: "Jl. Sudirman No. 456, Bandung",
      jabatan: "Product Manager",
      status_kerja: "Karyawan Kontrak",
    },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      usia: 21,
      jenis_kelamin: "Laki-laki",
      pendidikan: "D3",
      status_pernikahan: "Menikah",
      alamat: "Jl. Thamrin No. 789, Surabaya",
      jabatan: "UI/UX Designer",
      status_kerja: "Magang",
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

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || employee.status_kerja === filterStatus;
    return matchesSearch && matchesStatus;
  });

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

      <div style={{ padding: "6px" }}>
        {/* Header Section */}
        <Row
          align="middle"
          justify="space-between"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={3} style={{ margin: 0 }}>
              Manajemen Karyawan
            </Title>
            <p style={{ color: "#8c8c8c", margin: "4px 0 0 0" }}>
              Kelola data karyawan perusahaan
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
              Tambah Karyawan
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
                  placeholder="Cari berdasarkan nama atau email..."
                  prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{ width: 300, borderRadius: "6px" }}
                  allowClear
                  size="large"
                />
                <Select
                  value={filterStatus}
                  onChange={setFilterStatus}
                  style={{ width: 180, borderRadius: "6px" }}
                  size="large"
                  suffixIcon={<FilterOutlined />}
                >
                  <Select.Option value="all">Semua Status</Select.Option>
                  <Select.Option value="Karyawan Tetap">
                    Karyawan Tetap
                  </Select.Option>
                  <Select.Option value="Karyawan Kontrak">
                    Karyawan Kontrak
                  </Select.Option>
                  <Select.Option value="Magang">Magang</Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{ color: "#8c8c8c" }}>
                Total: <strong>{filteredEmployees.length}</strong> karyawan
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}
        <ListTable
          employees={filteredEmployees}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedEmployee={setSelectedEmployee}
        />
      </div>
    </Navigation>
  );
}

export default Employee;
