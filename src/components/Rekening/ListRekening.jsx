import { Table, Button, Popconfirm, Tag, Space, Avatar } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";

const ListRekening = (props) => {
  const {
    rekenings,
    onDelete,
    setIsDetailOpen,
    setSelectedRekening,
    setOpenEditModal,
  } = props;

  const text = "Are you sure to delete this Employee data?";
  const description = "Delete the Employee data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => (
        <div style={{ fontWeight: 500, color: "#666" }}>{index + 1}</div>
      ),
      width: 70,
      align: "center",
    },
    {
      title: "Nama Bank",
      key: "rekening",
      render: (_text, record) => (
        <Space>
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<UserOutlined />}
          />
          <div>
            <div style={{ fontWeight: 600, color: "#262626" }}>
              {record.nama_bank}
            </div>
            <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
              {record.nama_pemilik}
            </div>
          </div>
        </Space>
      ),
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: "Nama Bank",
      dataIndex: "nama_bank",
      width: 80,
      align: "center",
      render: (usia) => <Tag color="blue">{usia}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 120,
      align: "center",
      render: (status) => (
        <Tag color={status === "Aktif" ? "geekblue" : "magenta"}>{status}</Tag>
      ),
    },
    {
      title: "Nama Pemilik",
      dataIndex: "nama_pemilik",
      width: 150,
      render: (nama_pemilik) => <Tag color="green">{nama_pemilik}</Tag>,
    },
    {
      title: "Nomer Rekening",
      dataIndex: "nomer_rekening",
      width: 160,
      align: "center",
      render: (status) => (
        <Tag color={status === "Active" ? "success" : "default"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 180,
      align: "center",
      fixed: "right",
      render: (_text, record) => (
        <Space size="small">
          <Button
            color="primary"
            variant="outlined"
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedRekening(record);
              setIsDetailOpen(true);
            }}
          />
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedRekening(record);
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
      dataSource={rekenings}
      bordered
      size="middle"
      scroll={{ x: 1000 }}
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

export default ListRekening;
