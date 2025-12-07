import { Table, Button, Popconfirm } from "antd";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
const ListStok = (props) => {
  const { stokopnames, onDelete, setSelectedStokOpname, setIsDetailOpen, setIsEditOpen } =
    props;
  console.log(stokopnames);
  const text = "Are you sure to delete this Stok data?";
  const description = "Delete the Stok data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => index + 1,
      width: 70,
    },
    {
      title: "Category",
      dataIndex: "Category",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: "Kode Barang",
      dataIndex: "KodeBarang",
    },
    {
      title: "Nama Barang",
      dataIndex: "NamaBarang",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
    },
    {
      title: "Keterangan",
      dataIndex: "Keterangan",
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
              setSelectedStokOpname(record);
              setIsDetailOpen(true);
            }}
            style={{ marginRight: 8 }}
          ></Button>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              (record);
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
  return <Table columns={columns} dataSource={stokopnames} />;
};
export default ListStok;
