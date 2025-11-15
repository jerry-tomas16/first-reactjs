import React from "react";
import { Table, Button, Popconfirm } from "antd";

const ListProduk = (props) => {
  const { produks, onDelete, setIsDetailOpen, setSelectedProduk} = props;

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
      width: 200,
      render: (_text, record) => (
        <>
          <Button
            onClick={() => {
              setSelectedProduk(record);
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
  return <Table columns={columns} dataSource={produks} />;
};
export default ListProduk;
