import { Button, Form, Input, Select } from "antd";

function FormStok(props) {
  const [form] = Form.useForm();
  const { setStokOpnames, setIsModalOpen } = props;
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
    const kodeStokOpname = `stokopname${Math.floor(1000 + Math.random() * 9000)}`;
    setStokOpnames((prev) => [...prev, { kodeStokOpname, ...values.stokopname }]);
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
        name={["stokopname", "Category"]}
        label="Category"
        rules={[{ required: true, message: "Type category is required!" }]}
      >
        <Select placeholder="Pilih Type Category">
          <Select.Option value="food">Food</Select.Option>
          <Select.Option value="non food">Non Food</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={["stokopname", "KodeBarang"]}
        label="Kode Barang"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["stokopname", "NamaBarang"]}
        label="Nama Barang"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

            <Form.Item
        name={["stokopname", "Quantity"]}
        label="Quantity"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

            <Form.Item
        name={["stokopname", "Keterangan"]}
        label="Keterangan"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormStok;
