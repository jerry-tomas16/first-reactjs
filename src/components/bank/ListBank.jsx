import {Table, Button, Popconfirm, Tag, Space, Avatar} from "antd";
import {EyeOutlined, DeleteOutlined, EditOutlined, UserOutlined} from "@ant-design/icons";

const ListBank = (props) => {
  const {banks, onDelete, setIsDetailOpen, setSelectedBank, setOpenEditModal} = props;

  const text = "Are you sure to delete this Employee data?";
  const description = "Delete the Employee data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => <div style={{fontWeight: 500, color: "#666"}}>{index + 1}</div>,
      width: 50,
      align: "center",
    },
    {
      title: "Code Bank",
      dataIndex: "bank_code",
      align: "center",
      render: (status) => <Tag color={status === "active" ? "success" : "default"}>{status}</Tag>,
    },
    {
      title: "Nama Bank",
      dataIndex: "bank_name",
      align: "center",
      render: (usia) => <Tag color="blue">{usia}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "bank_status",
      width: 180,
      align: "center",
      render: (status) => <Tag color={status === "active" ? "geekblue" : "magenta"}>{status}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      width: 150,
      align: "center",
      fixed: "right",
      render: (_text, record) => (
        <Space size="small">
          <Button
            color="primary"
            variant="outlined"
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedBank(record);
              setIsDetailOpen(true);
            }}
          />
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedBank(record);
              setOpenEditModal(true);
            }}
          />
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
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={banks}
      bordered
      size="middle"
      scroll={{x: 1000}}
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      className="custom-table"
      rowClassName={() => "custom-row"}
    />
  );
};

export default ListBank;
