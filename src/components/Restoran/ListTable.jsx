import { Table, Button, Popconfirm } from "antd";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
const ListTable = (props) => {
  const { restorans, onDelete, setSelectedRestoran, setIsDetailOpen } = props;
  console.log(restorans);
  const text = "Are you sure to delete this Restoran data?";
  const description = "Delete the Restoran data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => index + 1,
      width: 70,
    },
    {
      title: "Kode Restoran",
      dataIndex: "kode_restoran",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: "Area Restoran",
      dataIndex: "area_restoran",
    },
    {
      title: "Nama Restoran",
      dataIndex: "nama_restoran",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
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
              setSelectedRestoran(record);
              setIsDetailOpen(true);
            }}
            style={{ marginRight: 8 }}
          ></Button>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
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
  return <Table columns={columns} dataSource={restorans} />;
};
export default ListTable;
