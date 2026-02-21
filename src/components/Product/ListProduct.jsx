import {Table, Button, Popconfirm} from "antd";
import {EyeOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
const ListProduct = (props) => {
  const {products, onDelete, setIsDetailOpen, setSelectedProduct, setIsEditOpen} = props;
  console.log(products);
  const text = "Are you sure to delete this Product data?";
  const description = "Delete the Product data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => index + 1,
      width: 70,
    },
       {
      title: "Nama Produk",
      dataIndex: "product_name",
    },
    {
      title: "Kode Produk",
      dataIndex: "product_code",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
 

    {
      title: "Deskripsi",
      dataIndex: "description",
    },
    {
      title: "Kategory",
      dataIndex: "kategory",
    },

    {
      title: "Action",
      key: "action",
      width: 150,
      render: (_text, record) => (
        <>
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedProduct(record);
              setIsDetailOpen(true);
            }}
            style={{marginRight: 8}}
          ></Button>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedProduct(record);
              setIsEditOpen(true);
              // Handle edit action
            }}
            style={{marginRight: 8}}
          ></Button>
          <Popconfirm
            placement="leftBottom"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              onDelete(record);
            }}
          >
            <Button danger icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return <Table columns={columns} dataSource={products} />;
};
export default ListProduct;
