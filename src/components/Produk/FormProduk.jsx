import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";

export default function FormProduk(props) {
  const [form] = Form.useForm();
  const { setProduks, setIsModalOpen } = props;
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
    setProduks((prev) => [...prev, values.produk]);
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
        name={["produk", "kode_produk"]}
        label="Kode Produk"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["produk", "nama_produk"]}
        label="Nama Produk"
        rules={[{ type: "nama_produk" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["produk", "jumlah"]}
        label="Jumlah"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>
          <Form.Item
        name={["produk", "deskripsi"]}
        label="Deskripsi"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["produk", "kategory"]}
        label="Kategory"
        rules={[{ required: true, message: "Jenis Kategory is required!" }]}
      >
        <Select placeholder="Pilih Jenis Kategory">
          <Select.Option value="NonFood">Non Food</Select.Option>
          <Select.Option value="Food">Food</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
