import {Row, Col, Button, Input, Select, Card, Space, Typography} from "antd";
import {PlusOutlined, SearchOutlined, FilterOutlined} from "@ant-design/icons";
import ListTable from "../../components/menu/TableMenu";
import FormMenu from "../../components/menu/FormMenu";
import DetailMenu from "../../components/menu/DetailMenu";
import CostumeModal from "../../components/CostumeModal";
import EditMenu from "../../components/menu/EditMenu";
import {useState} from "react";

const {Title} = Typography;
function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
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
    {
      kodeMakanan: "NG02",
      restoran: "Surya",
      menu: "Nasi Padang",
      type: "Makanan",
      area_restoran: "Jakarta",
      harga: 30000,
      status: "Tersedia",
    },
    {
      kodeMakanan: "NG02",
      restoran: "Surya",
      menu: "Nasi Padang",
      type: "Makanan",
      area_restoran: "Jakarta",
      harga: 30000,
      status: "Tidak Tersedia",
    },
  ]);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDeleteRow = (record) => {
    const filteredData = menus.filter((item) => item.kodeMakanan !== record.kodeMakanan);
    setMenus(filteredData);
  };

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredMenus = menus.filter((menu) => {
    const matchesSearch =
      menu.kodeMakanan.toLowerCase().includes(searchText.toLowerCase()) ||
      menu.restoran.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = filterStatus === "all" || menu.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  console.log(filteredMenus);
  const handleUpdatedata = (record) => {
    const updateMenu = menus.map((menu) => (menu.kodeMakanan === record.kodeMakanan ? record : menu));
    setMenus(updateMenu);
  };
  return (
    <>
      <CostumeModal isModalOpen={isOpen} setIsModalOpen={setIsOpen} title="Form Menu" width={700}>
        <FormMenu setMenus={setMenus} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal isModalOpen={isEditOpen} setIsModalOpen={setIsEditOpen} title="Edit Menu" width={700}>
        <EditMenu
          setMenus={setMenus}
          selectedMenu={selectedMenu}
          setIsModalOpen={setIsEditOpen}
          handleUpdatedata={(record) => {
            handleUpdatedata(record);
          }}
        />
      </CostumeModal>
      <CostumeModal isModalOpen={isDetailOpen} setIsModalOpen={setIsDetailOpen} title="Detail Menu">
        <DetailMenu menu={selectedMenu} />
      </CostumeModal>

      <div style={{padding: "6px"}}>
        {/* Header Section */}

        <Row align="middle" justify="space-between" style={{marginBottom: 24}}>
          <Col>
            <Title level={3} style={{margin: 0}}>
              List menu Makanan
            </Title>
            <p style={{color: "#8c8c8c", margin: "4px 0 0 0"}}>List menu makanan restoran</p>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleOpen}
              size="large"
              style={{borderRadius: "8px"}}
            >
              Add Menu
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
                  <Select.Option value="Tersedia">Tersedia</Select.Option>
                  <Select.Option value="Tidak Tersedia">Tidak Tersedia</Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{color: "#8c8c8c"}}>
                Total: <strong>{filteredMenus.length}</strong> menu
              </span>
            </Col>
          </Row>
        </Card>

        {/* Table Section */}
        <ListTable
          menus={filteredMenus}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedMenu={setSelectedMenu}
          setIsEditOpen={setIsEditOpen}
        />
      </div>
    </>
  );
}
export default Menu;
