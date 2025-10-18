import React from "react";
import { Table, Button } from "antd";

const ListTable = (props) => {
  const { employees, onDelete } = props;
  const columns = [
    {
      title: "No",
      key: "no",
      render: (_text, _record, index) => index + 1,
      width: 70,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 3,
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Usia",
      dataIndex: "usia",
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenis_kelamin",
    },
    {
      title: "Pendidikan",
      dataIndex: "pendidikan",
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
          <Button
            onClick={() => alert(`Detail:\n${JSON.stringify(record, null, 2)}`)}
            style={{ marginRight: 8 }}
          >
            Detail
          </Button>
          <Button
            danger
            onClick={() => {
              if (window.confirm("Hapus data ini?")) {
                onDelete(record);
              }
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];
  return <Table columns={columns} dataSource={employees} />;
};
export default ListTable;
