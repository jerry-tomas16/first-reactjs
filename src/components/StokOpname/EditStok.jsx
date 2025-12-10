import { Button, Form, Input, Select, Space, Row, Col } from "antd";
import { useEffect } from "react";
import { UserOutlined, MailOutlined, IdcardOutlined } from "@ant-design/icons";


export default function EditStok(props) {
  const [form] = Form.useForm();
  const { selectedStokOpname, setIsModalOpen, handleUpdate } = props;
  const validateMessages = {
    required: "${label} wajib diisi!",
    types: {
      email: "${label} bukan email yang valid!",
      number: "${label} bukan angka yang valid!",
    },
    number: {
        Range: "${label} must be between ${min} and ${max}",
    },
  };
    useEffect(() => {
    if (selectedStokOpname) {
      form.setFieldsValue({
        stokopname: selectedStokOpname,
      });
    }
}, [selectedStokOpname, form]);
  const onFinish = (values) => {
    handleUpdate(values.stokopname);
    form.resetFields();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 100);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
      size="middle"
    >
      <Form.Item name={["stokopname", "Category"]} hidden>
        <Input />
        </Form.Item>
        <Form.Item
        name={["stokopname", "Category"]}
        label="Category"
        rules={[{ required: true, message: "Category is required!" }]}
        style={{ marginBottom: 12 }}
      >
        <Select placeholder="Pilih Category">
          <Select.Option value="food">Food</Select.Option>
          <Select.Option value="non food">Non Food</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={["stokopname", "KodeBarang"]}
        label="Kode Barang"
        rules={[{ required: true, message: "Kode Barang is required!" }]}
        style={{ marginBottom: 12 }}
      >
        <Input placeholder="Masukkan kode barang" />
      </Form.Item>

      <Form.Item
        name={["stokopname", "NamaBarang"]}
        label="Nama Barang"
        rules={[{ required: true, message: "Nama Barang is required!" }]}
        style={{ marginBottom: 12 }}
      >
        <Input placeholder="Masukkan nama barang" />
      </Form.Item>

      <Form.Item
        name={["stokopname", "Quantity"]}
        label="Quantity"
        rules={[{ required: true, message: "Quantity is required!" }]}
        style={{ marginBottom: 12 }}
      >
        <Input type="number" placeholder="Masukkan quantity" />
      </Form.Item>
<Form.Item
                 name={["stokopname", "Keterangan"]}
                 label="Keterangan"
                 rules={[{ required: true, message: "Type  is required!" }]}
                 style={{ marginBottom: 12 }}
               >
                 <Select placeholder="Pilih keterangan">
                   <Select.Option value="Tersedia">Tersedia</Select.Option>
                   <Select.Option value="Tidak Tersedia">Tidak Tersedia</Select.Option>
                 </Select>
               </Form.Item>

      <Form.Item style={{ marginBottom: 0, textAlign: "right" }}>
        <Space>
          <Button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

