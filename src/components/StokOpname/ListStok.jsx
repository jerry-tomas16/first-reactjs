import React from "react";
import { Table, Button, Popconfirm } from "antd";

const ListStok = (props) => {
  const { stokopnames, onDelete, setSelectedStokOpname, setIsDetailOpen } = props;
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
      width: 200,
      render: (_text, record) => (
        <>
          <Button
            onClick={() => {
              setSelectedStokOpname(record);
              setIsDetailOpen(true);
            }}
            style={{ marginRight: 8 }}
          >
            Detail
          </Button>
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
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return <Table columns={columns} dataSource={stokopnames} />;
};
export default ListStok;
