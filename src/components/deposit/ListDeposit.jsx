import React, { useState, useMemo } from "react";
import {
  Table,
  Button,
  Popconfirm,
  Tag,
  Space,
  Avatar,
  Input,
  Typography,
  Tooltip,
} from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  CheckOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const { Text } = Typography;

const ListDeposit = (props) => {
  const {
    deposits = [],
    onDelete,
    setIsDetailOpen,
    setSelectedDeposit,
    setOpenEditModal,
  } = props;

  const [search, setSearch] = useState("");

  const formatCurrency = (value) => {
    const num = Number(value) || 0;
    return `Rp ${new Intl.NumberFormat("id-ID").format(Math.trunc(num))}`;
  };

  const filtered = useMemo(() => {
    if (!search) return deposits;
    const q = search.toLowerCase();
    return deposits.filter(
      (d) =>
        String(d.rekening_name || "")
          .toLowerCase()
          .includes(q) ||
        String(d.rekening_id || "")
          .toLowerCase()
          .includes(q) ||
        String(d.userName || "")
          .toLowerCase()
          .includes(q) ||
        String(d.nominal || "")
          .toLowerCase()
          .includes(q),
    );
  }, [deposits, search]);

  const text = "Are you sure to delete this deposit?";
  const description = "This action cannot be undone.";

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => (
        <div style={{ fontWeight: 600, color: "#444" }}>{index + 1}</div>
      ),
      width: 60,
      align: "center",
    },
    {
      title: "Nama Karyawan",
      dataIndex: "userName",
      width: 200,
      render: (name) => (
        <Space>
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<UserOutlined />}
            size="large"
          />
          <div>
            <div style={{ fontWeight: 700, color: "#111" }}>{name}</div>
          </div>
        </Space>
      ),
      sorter: (a, b) =>
        String(a.userName || "").localeCompare(String(b.userName || "")),
    },
    {
      title: "Rekening Penerima",
      key: "rekening_name",
      width: 200,
      render: (_text, record) => (
        <Space>
          <div>
            <div style={{ fontWeight: 700, color: "#111" }}>
              {record.rekening_name}
            </div>
            <div style={{ fontSize: 12, color: "#888" }}>
              {record.rekening_id}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: "Nominal",
      dataIndex: "nominal",
      width: 160,
      align: "right",
      render: (v) => <Text strong>{formatCurrency(Number(v) || 0)}</Text>,
    },
    {
      title: "Nominal Tips",
      dataIndex: "nominal_tips",
      width: 140,
      align: "right",
      render: (v) => <Text strong>{formatCurrency(Number(v) || 0)}</Text>,
    },
    {
      title: "Total Penambahan",
      key: "total_penambahan",
      width: 160,
      align: "right",
      render: (_v, record) => {
        const total =
          Number(record.nominal || 0) + Number(record.nominal_tips || 0);
        return <Text strong>{formatCurrency(total)}</Text>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 130,
      align: "center",
      render: (status) => {
        const color =
          status === "Aktif"
            ? "success"
            : status === "Pending"
            ? "orange"
            : "green";
        return (
          <Tag
            icon={status === "Aktif" ? <CheckOutlined /> : null}
            color={color}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      width: 150,
      align: "center",
      fixed: "right",
      render: (_text, record) => (
        <Space size="small">
          <Tooltip title="Lihat detail">
            <Button
              type="default"
              icon={<EyeOutlined />}
              onClick={() => {
                setSelectedDeposit(record);
                setIsDetailOpen(true);
              }}
            />
          </Tooltip>

          <Popconfirm
            placement="leftBottom"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
            onConfirm={() => onDelete && onDelete(record)}
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
      dataSource={filtered}
      rowKey={(r) => r.id || r.rekening_id || Math.random()}
      bordered
      size="middle"
      scroll={{ x: 1000 }}
      style={{
        backgroundColor: "#fff",
        borderRadius: 8,
        overflow: "hidden",
      }}
      className="custom-table"
      rowClassName={() => "custom-row"}
    />
  );
};

export default ListDeposit;
