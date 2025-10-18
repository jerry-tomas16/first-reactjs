import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";

export default function FormEmployee(props) {
  const [form] = Form.useForm();
  const { setEmployees, setIsModalOpen } = props;
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 20 },
    labelAlign: "left",
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log("cek", values);
    setEmployees((prev) => [...prev, values.user]);
    form.resetFields();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 100);
  };
  return (
    <Form
      {...layout}
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "usia"]}
        label="Usia"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["user", "jenis_kelamin"]}
        label="Jenis Kelamin"
        rules={[{ required: true, message: "Jenis Kelamin is required!" }]}
      >
        <Select placeholder="Pilih Jenis Kelamin">
          <Select.Option value="Laki-laki">Laki-laki</Select.Option>
          <Select.Option value="Perempuan">Perempuan</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={["user", "pendidikan"]}
        label="Pendidikan"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "status"]}
        label="Status"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "jabatan"]}
        label="Jabatan"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "Alamat"]} label="Alamat">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
