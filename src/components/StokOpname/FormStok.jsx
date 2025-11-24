import { Button, Form, Input, Select, Space } from "antd";

function FormStok(props) {
  const [form] = Form.useForm();
  const { setStokOpnames, setIsModalOpen } = props;

  const onFinish = (values) => {
    console.log("cek", values);
    const kodeStokOpname = `stokopname${Math.floor(
      1000 + Math.random() * 9000,
    )}`;
    setStokOpnames((prev) => [...prev, { kodeStokOpname, ...values }]);
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
      autoComplete="off"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      <Form.Item
        name="Category"
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
        name="KodeBarang"
        label="Kode Barang"
        rules={[{ required: true, message: "Kode Barang is required!" }]}
        style={{ marginBottom: 12 }}
      >
        <Input placeholder="Masukkan kode barang" />
      </Form.Item>

      <Form.Item
        name="NamaBarang"
        label="Nama Barang"
        rules={[{ required: true, message: "Nama Barang is required!" }]}
        style={{ marginBottom: 12 }}
      >
        <Input placeholder="Masukkan nama barang" />
      </Form.Item>

      <Form.Item
        name="Quantity"
        label="Quantity"
        rules={[{ required: true, message: "Quantity is required!" }]}
        style={{ marginBottom: 12 }}
      >
        <Input type="number" placeholder="Masukkan quantity" />
      </Form.Item>
      <Form.Item
        name="Keterangan"
        label="Keterangan"
        rules={[{ required: true, message: "Keterangan is required!" }]}
      >
        <Input.TextArea rows={3} placeholder="Masukkan keterangan" />
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
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default FormStok;
