import React from "react";
import { Table, Button, Popconfirm } from "antd";

const TableMakanan = (props) => {
  const { makanans } = props;

  const text = "Are you sure to delete this Makanan data?";
  const description = "Delete the Makanan data";

  const formatRupiah = (value) => {
    if (value == null || value === "") return "-";
    const number = Number(value);
    if (Number.isNaN(number)) return value;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => index + 1,
      width: 70,
    },
    {
      title: "Nama Restoran",
      dataIndex: "restoran",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: "Nama Makanan",
      dataIndex: "name",
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
      title: "Harga",
      dataIndex: "harga",
      render: (value) => formatRupiah(value),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (_text, record) => (
        <>
          <Button onClick={() => {}} style={{ marginRight: 8 }}>
            Detail
          </Button>
          <Popconfirm
            placement="leftBottom"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
            onConfirm={() => {}}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return <Table columns={columns} dataSource={makanans} />;
};
export default TableMakanan;
