import React from "react";
import { Table, Button, Popconfirm } from "antd";

const ListTable = (props) => {
  const { employees, onDelete, setIsDetailOpen, setSelectedEmployee } = props;

  const text = "Are you sure to delete this Employee data?";
  const description = "Delete the Employee data";

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
            onClick={() => {
              setSelectedEmployee(record);
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
  return <Table columns={columns} dataSource={employees} />;
};
export default ListTable;
