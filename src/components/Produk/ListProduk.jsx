import { Table, Button, Popconfirm } from "antd";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
const ListProduk = (props) => {
  const { produks, onDelete, setIsDetailOpen, setSelectedProduk,setIsEditOpen } = props;
console.log(produks);
  const text = "Are you sure to delete this Produk data?";
  const description = "Delete the Produk data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => index + 1,
      width: 70,
    },
    {
      title: "Kode Produk",
      dataIndex: "kode_produk",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: "Nama Produk",
      dataIndex: "nama_produk",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
    },
    {
      title: "Deskripsi",
      dataIndex: "deskripsi",
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
              setSelectedProduk(record);
              setIsDetailOpen(true);
            }}
            style={{ marginRight: 8 }}
          ></Button>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              
              (record)
              setIsEditOpen(true);
              // Handle edit action
            }}
            style={{ marginRight: 8 }}
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
  return <Table columns={columns} dataSource={produks} />;
};
export default ListProduk;
