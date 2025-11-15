import { Button, Form, Input, Select } from "antd";

function FormRestoran(props) {
  const [form] = Form.useForm();
  const { setRestorans, setIsModalOpen } = props;
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
    const kodeRestoran = `restoran${Math.floor(1000 + Math.random() * 9000)}`;
    setRestorans((prev) => [...prev, { kodeRestoran, ...values.restoran }]);
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
        name={["restoran", "kode_restoran"]}
        label="Kode Restauran"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["restoran", "area_restoran"]}
        label="Area Restauran"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["restoran", "nama_restoran"]}
        label="Nama Restoran"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
            <Form.Item name={["restoran", "keterangan"]} label="Keterangan">
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

export default FormRestoran;
