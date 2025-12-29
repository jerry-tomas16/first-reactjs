import {Button, Form, Input, Select, Space} from "antd";
import {useEffect} from "react";

export default function EditMenu(props) {
  const [form] = Form.useForm();
  const {setIsModalOpen, selectedMenu, handleUpdatedata} = props;

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

  useEffect(() => {
    if (selectedMenu) {
      form.setFieldsValue({
        menu: selectedMenu,
      });
    }
  }, [selectedMenu, form]);
  const onFinish = (values) => {
    handleUpdatedata(values.menu);
    form.resetFields();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 100);
  };

  return (
    <div>
      <Form
        form={form}
        name="form-menu"
        onFinish={onFinish}
        layout="vertical"
        validateMessages={validateMessages}
        size="middle"
      >
        <Form.Item name={["menu", "kodeMakanan"]} hidden>
          <Input />
        </Form.Item>
        <Form.Item
          name={["menu", "area_restoran"]}
          label="Area Restoran"
          rules={[{required: true}]}
          style={{marginBottom: 12}}
        >
          <Input placeholder="Masukkan area restoran" />
        </Form.Item>

        <Form.Item
          name={["menu", "restoran"]}
          label="Nama Restoran"
          rules={[{required: true}]}
          style={{marginBottom: 12}}
        >
          <Input placeholder="Masukkan nama restoran" />
        </Form.Item>

        <Form.Item name={["menu", "menu"]} label="Nama Menu" rules={[{required: true}]} style={{marginBottom: 12}}>
          <Input placeholder="Masukkan nama menu" />
        </Form.Item>

        <Form.Item
          name={["menu", "type"]}
          label="Type Menu"
          rules={[{required: true, message: "Type menu is required!"}]}
          style={{marginBottom: 12}}
        >
          <Select placeholder="Pilih type menu">
            <Select.Option value="Makanan">Makanan</Select.Option>
            <Select.Option value="Minuman">Minuman</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name={["menu", "harga"]} label="Harga" rules={[{required: true}]} style={{marginBottom: 12}}>
          <Input placeholder="Masukkan harga" type="number" />
        </Form.Item>

        <Form.Item name={["menu", "status"]} label="Status" rules={[{required: true, message: "Status is required!"}]}>
          <Select placeholder="Pilih status">
            <Select.Option value="Tersedia">Tersedia</Select.Option>
            <Select.Option value="Tidak Tersedia">Tidak Tersedia</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item style={{textAlign: "right", marginBottom: 0}}>
          <Space>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              update
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
