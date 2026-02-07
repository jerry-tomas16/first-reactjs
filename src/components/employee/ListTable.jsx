import {Table, Button, Popconfirm, Tag, Space, Avatar} from "antd";
import {EyeOutlined, DeleteOutlined, EditOutlined, UserOutlined} from "@ant-design/icons";

const ListTable = (props) => {
  const {employees, onDelete, setIsDetailOpen, setSelectedEmployee, setOpenEditModal} = props;

  const text = "Are you sure to delete this Employee data?";
  const description = "Delete the Employee data";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => <div style={{fontWeight: 500, color: "#666"}}>{index + 1}</div>,
      width: 70,
      align: "center",
    },
    {
      title: "Nama Karyawan",
      key: "fullname",
      render: (_text, record) => (
        <Space>
          <Avatar style={{backgroundColor: "#1890ff"}} icon={<UserOutlined />} />
          <div>
            <div style={{fontWeight: 600, color: "#262626"}}>{record.fullname || "-"}</div>
            <div style={{fontSize: "12px", color: "#8c8c8c"}}>{record.email || "-"}</div>
          </div>
        </Space>
      ),
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: "Usia",
      dataIndex: "birth_date",
      width: 80,
      align: "center",
      render: (birth_date) => {
        if (!birth_date) return <Tag color="default">-</Tag>;
        const age = Math.floor((new Date() - new Date(birth_date)) / (365.25 * 24 * 60 * 60 * 1000));
        return <Tag color="blue">{age}</Tag>;
      },
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "gender",
      width: 120,
      align: "center",
      render: (gender) => <Tag color={gender === "Laki-laki" ? "geekblue" : "magenta"}>{gender || "-"}</Tag>,
    },
    {
      title: "Pendidikan",
      dataIndex: "education",
      width: 150,
      render: (education) => <Tag color="green">{education || "-"}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "is_active",
      width: 160,
      align: "center",
      render: (status) => (
        <Tag color={status === 1 ? "success" : "default"}>{status === 1 ? "Active" : "Non Active"}</Tag>
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
              setSelectedEmployee(record);
              setIsDetailOpen(true);
            }}
          />
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedEmployee(record);
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
      dataSource={employees}
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

export default ListTable;
