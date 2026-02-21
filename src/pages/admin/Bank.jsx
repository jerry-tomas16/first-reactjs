import React, {useEffect, useState} from "react";
import {Row, Col, Button, Input, Select, Card, Space, Typography} from "antd";
import {PlusOutlined, SearchOutlined, FilterOutlined} from "@ant-design/icons";
import CostumeModal from "../../components/CostumeModal";
import DetailBank from "../../components/bank/DetailBank";
import FormBank from "../../components/bank/FormBank";
import ListTable from "../../components/bank/ListBank";
import EditBank from "../../components/bank/EditBank";
import {useSelector, useDispatch} from "react-redux";
import {getListBank, deleteBank} from "../../store/bank/actions";
const {Title} = Typography;

function Bank() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedBank, setSelectedbank] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [banks, setBanks] = useState([]);

  const dataBank = useSelector((state) => state.bank.dataBank);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    console.log("cek", record);
    dispatch(deleteBank(record.id))
      .then((res) => {
        let status = res.status;
        if (status === "success") {
          dispatch(getListBank());
        } 
      })
      .catch((error) => {
        console.error("Failed to delete bank:", error);
      }); 
  };
  const handleUpdatedata = (record) => {
    // const updatedBanks = dataBank.map((bank) =>
    //   bank.code_bank === record.code_bank ? record : bank,
    // );
    // setBanks(updatedBanks);  

  };
  useEffect(() => {
    dispatch(getListBank());
  }, [dispatch]);
  
  return (
    <>
      <CostumeModal
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
        title="Form Bank
      "
        width={700}
      >
        <FormBank setBanks={setBanks} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={isDetailOpen}
        setIsModalOpen={setIsDetailOpen}
        title="Detail Bank
      "
      >
        <DetailBank bank={selectedBank} />
      </CostumeModal>
      <CostumeModal
        isModalOpen={openEditModal}
        setIsModalOpen={setOpenEditModal}
        title="Edit Bank
      "
        width={700}
      >
        <EditBank
          setBanks={setBanks}
          selectedBank={selectedBank}
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
                Total: <strong>{dataBank.length}</strong> bank
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}
        <ListTable
          banks={dataBank}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedbank={setSelectedbank}
          setOpenEditModal={setOpenEditModal}
        />
      </div>
    </>
  );
}

export default Bank;
