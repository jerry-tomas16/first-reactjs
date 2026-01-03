import React, {useState} from "react";
import {Row, Col, Button, Input, Select, Card, Space, Typography} from "antd";
import {PlusOutlined, SearchOutlined, FilterOutlined} from "@ant-design/icons";
import CostumeModal from "../../components/CostumeModal";
import DetailBank from "../../components/moduleBank/DetailBank";
import FormBank from "../../components/moduleBank/FormBank";
import ListTable from "../../components/moduleBank/ListBank";
import EditBank from "../../components/moduleBank/EditBank";
const {Title} = Typography;

function Bank() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedModuleBank, setSelectedModuleBank] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [modulebanks, setModuleBanks] = useState([
    {
      code_bank: "002",
      nama_bank: "Bri",
      status: "Aktif",
    },
    {
      code_bank: "014",
      nama_bank: "Bca",
      status: "Aktif",
    },
    {
      code_bank: "008",
      nama_bank: "Mandiri",
      status: "In Aktif",
    },
  ]);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    const filteredData = modulebanks.filter((item) => item.code_bank !== record.code_bank);
    setModuleBanks(filteredData);
  };
  const filteredModuleBanks = modulebanks.filter((modulebank) => {
    const matchesSearch =
      modulebank.code_bank.toLowerCase().includes(searchText.toLowerCase()) ||
      modulebank.nama_bank.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = filterStatus === "all" || modulebank.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const handleUpdatedata = (record) => {
    console.log(record);
    console.log(modulebanks);
    const updatedModuleBanks = modulebanks.map((modulebank) =>
      modulebank.nama_bank === record.nama_bank ? record : modulebank,
    );
    setModuleBanks(updatedModuleBanks);
  };
  return (
    <>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Bank
      "
        width={700}
      >
        <FormBank setModuleBanks={setModuleBanks} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Bank
      "
      >
        <DetailBank modulebank={selectedModuleBank} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={openEditModal}
        setIsModalOpen={setOpenEditModal}
        title="Edit Bank
      "
        width={700}
      >
        <EditBank
          setModuleBanks={setModuleBanks}
          selectedModuleBank={selectedModuleBank}
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
              Data Bank
            </Title>
            <p style={{color: "#8c8c8c", margin: "4px 0 0 0"}}>Kelola data Bank</p>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleOpen}
              size="large"
              style={{borderRadius: "8px"}}
            >
              Tambah Bank
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
                  placeholder="Cari berdasarkan  code atau nama bank..."
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
                  <Select.Option value="Aktif">Aktif</Select.Option>
                  <Select.Option value="In Aktif">In Aktif</Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{color: "#8c8c8c"}}>
                Total: <strong>{filteredModuleBanks.length}</strong> bank
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}
        <ListTable
          modulebanks={filteredModuleBanks}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedModuleBank={setSelectedModuleBank}
          setOpenEditModal={setOpenEditModal}
        />
      </div>
    </>
  );
}

export default Bank;
