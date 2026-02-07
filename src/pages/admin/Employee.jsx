import {useEffect, useState} from "react";
import {Row, Col, Button, Input, Select, Card, Space, Typography} from "antd";
import {PlusOutlined, SearchOutlined, FilterOutlined} from "@ant-design/icons";
import ListTable from "../../components/employee/ListTable";
import FormEmployee from "../../components/employee/FormEmployee";
import DetailEmployee from "../../components/employee/DetailEmployee";
import CostumeModal from "../../components/CostumeModal";
import FormEdit from "../../components/employee/FormEdit";
import {useSelector, useDispatch} from "react-redux";
import {getListEmployee} from "../../store/employee/actions";

const {Title} = Typography;

function Employee() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const dataEmployee = useSelector((state) => state.employee.dataEmployee);
  const [employees, setEmployees] = useState([]);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    // const filteredData = dataEmployee.filter((item) => item.email !== record.email);
    // setEmployees(filteredData);
  };
  // const filteredEmployees = dataEmployee.filter((employee) => {
  //   const matchesSearch =
  //     employee.fullname?.toLowerCase().includes(searchText.toLowerCase()) ||
  //     employee.email?.toLowerCase().includes(searchText.toLowerCase());
  //   const matchesStatus = filterStatus === "all" || employee.employee_status === filterStatus;
  //   return matchesSearch && matchesStatus;
  // });

  const handleUpdatedata = (record) => {
    const updatedEmployees = dataEmployee.map((employee) => (employee.email === record.email ? record : employee));
    setEmployees(updatedEmployees);
  };
  useEffect(() => {
    dispatch(getListEmployee());
  }, []);

  return (
    <>
      <CostumeModal isModalOpen={isOpen} setIsModalOpen={setIsOpen} title="Form Karyawan" width={700}>
        <FormEmployee setEmployees={setEmployees} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal isModalOpen={isDetailOpen} setIsModalOpen={setIsDetailOpen} title="Detail Employee">
        <DetailEmployee employee={selectedEmployee} />
      </CostumeModal>
      <CostumeModal isModalOpen={openEditModal} setIsModalOpen={setOpenEditModal} title="Edit Karyawan" width={700}>
        <FormEdit
          setEmployees={setEmployees}
          selectedEmployee={selectedEmployee}
          setIsModalOpen={setOpenEditModal}
          handleUpdatedata={(record) => {
            handleUpdatedata(record);
          }}
        />
      </CostumeModal>

      <div style={{padding: "6px"}}>
        {/* Header Section */}
        <Row align="middle" justify="space-between" style={{marginBottom: 24}}>
          <Col>
            <Title level={3} style={{margin: 0}}>
              Manajemen Karyawan
            </Title>
            <p style={{color: "#8c8c8c", margin: "4px 0 0 0"}}>Kelola data karyawan perusahaan</p>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleOpen}
              size="large"
              style={{borderRadius: "8px"}}
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
          bodyStyle={{padding: "16px"}}
        >
          <Row gutter={[12, 12]} align="middle">
            <Col flex="auto">
              <Space size="middle" style={{width: "100%"}}>
                <Input
                  placeholder="Cari berdasarkan nama atau email..."
                  prefix={<SearchOutlined style={{color: "#bfbfbf"}} />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{width: 300, borderRadius: "6px"}}
                  allowClear
                  size="large"
                />
                <Select
                  value={filterStatus}
                  onChange={setFilterStatus}
                  style={{width: 180, borderRadius: "6px"}}
                  size="large"
                  suffixIcon={<FilterOutlined />}
                >
                  <Select.Option value="all">Semua Status</Select.Option>
                  <Select.Option value="Karyawan Tetap">Karyawan Tetap</Select.Option>
                  <Select.Option value="Karyawan Kontrak">Karyawan Kontrak</Select.Option>
                  <Select.Option value="Magang">Magang</Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{color: "#8c8c8c"}}>
                Total: <strong>{dataEmployee.length}</strong> karyawan
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}
        <ListTable
          employees={dataEmployee}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedEmployee={setSelectedEmployee}
          setOpenEditModal={setOpenEditModal}
        />
      </div>
    </>
  );
}

export default Employee;
