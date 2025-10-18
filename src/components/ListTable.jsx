import React from "react";
import { Table } from "antd";
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
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const ListTable = (props) => {
  const { employees } = props;
  return <Table columns={columns} dataSource={employees} onChange={onChange} />;
};
export default ListTable;
