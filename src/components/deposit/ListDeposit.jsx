import { Table, Button, Popconfirm, Tag, Space, Avatar } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";

const ListDeposit = (props) => {
  const {
    deposits,
    onDelete,
    setIsDetailOpen,
    setSelectedDeposit,
    setOpenEditModal,
  } = props;

  const text = "Are you sure to delete this Employee data?";
  const description = "Delete the Deposit data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => (
        <div style={{ fontWeight: 500, color: "#666" }}>{index + 1}</div>
      ),
      width: 50,
      align: "center",
    },
    {
      title: "Pemilik Rekening",
      key: "rekening_name",
      render: (_text, record) => (
        <Space>
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<UserOutlined />}
          />
          <div>
            <div style={{ fontWeight: 600, color: "#262626" }}>
              {record.rekening_name}
            </div>
            <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
              {record.rekening_id}
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
      title: "Nama Karyawan",
      dataIndex: "userName",
      width: 150,
      align: "center",
      render: (status) => (
        <Tag color={status === "Active" ? "success" : "default"}>{status}</Tag>
      ),
    },
    {
      title: "Nominal",
      dataIndex: "nominal",
      width: 150,
      align: "center",
      render: (status) => (
        <Tag color={status === "Active" ? "success" : "default"}>{status}</Tag>
      ),
    },
    {
      title: "Nominal tips",
      dataIndex: "nominal_tips",
      width: 110,
      align: "center",
      render: (usia) => <Tag color="blue">{usia}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 110,
      align: "center",
      render: (status) => (
        <Tag color={status === "Aktif" ? "geekblue" : "magenta"}>{status}</Tag>
      ),
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
              setSelectedDeposit(record);
              setIsDetailOpen(true);
            }}
          />
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedDeposit(record);
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
      dataSource={deposits}
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

export default ListDeposit;
