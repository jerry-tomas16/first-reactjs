import React, {useEffect, useState} from "react";
import {Row, Col, Button, Input, Select, Card, Space, Typography} from "antd";
import {PlusOutlined, SearchOutlined, FilterOutlined} from "@ant-design/icons";
import CostumeModal from "../../components/CostumeModal";
import ListProduct from "../../components/Product/ListProduct";
import FormProduct from "../../components/Product/FormProduct";
import DetailProduct from "../../components/Product/DetailProduct";
import EditProduct from "../../components/Product/EditProduct";
import {useSelector, useDispatch} from "react-redux";
import {getListProduct, deleteProduct} from "../../store/product/actions";

const {Title} = Typography;
function Product() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterKategory, setFilterKategory] = useState("all");
  const [isEditOpen, setIsEditOpen] = useState(false);

  const dataProduct = useSelector((state) => state.product.dataProduct);
  const [products, setProducts] = useState([]);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteRow = (record) => {
    dispatch(deleteProduct(record.kode_produk))
      .then((res) => {
        let status = res.status;
        if (status === "success") {
          dispatch(getListProduct());
        }
      })
      .catch((error) => {
        console.error("Failed to delete produk:", error);
      });
  };
  const handleUpdatedata = (record) => {
    // const updatedProducts = dataProduct.map((product) =>
    //   product.kode_produk === record.kode_produk ? record : product,
    // );
    // setProducts(updatedProducts);
  };
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  return (
    <>
      <CostumeModal isModalOpen={isOpen} setIsModalOpen={setIsOpen} title="Form Produk" width={700}>
        <FormProduct setProducts={setProducts} setIsModalOpen={setIsOpen} />
      </CostumeModal>
      <CostumeModal isModalOpen={isEditOpen} setIsModalOpen={setIsEditOpen} title="Edit Produk" width={700}>
        <EditProduct
          setProducts={setProducts}
          selectedProduct={selectedProduct}
          setIsModalOpen={setIsEditOpen}
          handleUpdatedata={(record) => {
            handleUpdatedata(record);
          }}
        />
      </CostumeModal>

      <CostumeModal isModalOpen={isDetailOpen} setIsModalOpen={setIsDetailOpen} title="Detail Produk">
        <DetailProduct produk={selectedProduct} />
      </CostumeModal>

      <div style={{padding: "6px"}}>
        {/* Header Section */}

        <Row align="middle" justify="space-between" style={{marginBottom: 24}}>
          <Col>
            <Title level={3} style={{margin: 0}}>
              List produk
            </Title>
            <p style={{color: "#8c8c8c", margin: "4px 0 0 0"}}>List produk</p>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleOpen}
              size="large"
              style={{borderRadius: "8px"}}
            >
              Add Produk
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
                  placeholder="Cari berdasarkan nama produk ..."
                  prefix={<SearchOutlined style={{color: "#bfbfbf"}} />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{width: 300, borderRadius: "6px"}}
                  allowClear
                  size="large"
                />
                <Select
                  value={filterKategory}
                  onChange={setFilterKategory}
                  style={{width: 180, borderRadius: "6px"}}
                  size="large"
                  suffixIcon={<FilterOutlined />}
                >
                  <Select.Option value="all">Semua Kategory</Select.Option>
                  <Select.Option value="food">Food</Select.Option>
                  <Select.Option value="non_food">Non Food</Select.Option>
                </Select>
              </Space>
            </Col>
            <Col>
              <span style={{color: "#8c8c8c"}}>
                Total: <strong>{filterKategory.length}</strong> menu
              </span>
            </Col>
          </Row>
        </Card>
        {/* Table Section */}
        <ListProduct
          products={dataProduct}
          onDelete={handleDeleteRow}
          setIsDetailOpen={setIsDetailOpen}
          setSelectedProduct={setSelectedProduct}
          setIsEditOpen={setIsEditOpen}
        />
      </div>
    </>
  );
}

export default Product;
