import { Button, Form, Input, Select } from "antd";

function FormMenu(props) {
  const [form] = Form.useForm();
  const { setMenus, setIsModalOpen } = props;
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
    const kodeMakanan = `menu${Math.floor(1000 + Math.random() * 9000)}`;
    setMenus((prev) => [...prev, { kodeMakanan, ...values.menu }]);
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
        name={["menu", "area_restoran"]}
        label="Area Restauran"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["menu", "restoran"]}
        label="Nama Restauran"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["menu", "menu"]}
        label="Nama Menu"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["menu", "type"]}
        label="Type Menu"
        rules={[{ required: true, message: "Type menu is required!" }]}
      >
        <Select placeholder="Pilih Type Menu">
          <Select.Option value="type">Makanan</Select.Option>
          <Select.Option value="type">Minuman</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={["menu", "harga"]}
        label="Harga"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["menu", "status"]}
        label="Status"
        rules={[{ required: true, message: "Status is required!" }]}
      >
        <Select placeholder="Pilih Status ">
          <Select.Option value="Tersedia">Tersedia</Select.Option>
          <Select.Option value="Tidak Tersedia">Tidak Tersedia</Select.Option>
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

export default FormMenu;
