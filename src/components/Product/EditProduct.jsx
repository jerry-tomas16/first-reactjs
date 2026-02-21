import {Button, Form, Input, InputNumber, Select, Space} from "antd";
import {useEffect} from "react";
import Product from './../../pages/admin/Product';
export default function FormProduct(props) {
  const [form] = Form.useForm();
  const {setProducts, setIsModalOpen, selectedProduct} = props;

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  useEffect(() => {
    if (!selectedProduct) {
      form.resetFields();
      return;
    }
    const source = selectedProduct.Product ?? selectedProduct;
    const Product = {
      ...source,
      jumlah: source?.jumlah != null ? Number(source.jumlah) : source?.jumlah,
    };

    form.setFieldsValue({Product});
  }, [selectedProduct, form]);
  const onFinish = (values) => {
    setProducts((prev) => [...prev, values.Product]);
    form.resetFields();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 100);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      <Form.Item
        name={["Product", "kode_Product"]}
        label="Kode Product"
        rules={[{required: true}]}
        style={{marginBottom: 12}}
      >
        <Input placeholder="Masukkan kode Product" />
      </Form.Item>

      <Form.Item
        name={["Product", "nama_Product"]}
        label="Nama Product"
        rules={[{required: true}]}
        style={{marginBottom: 12}}
      >
        <Input placeholder="Masukkan nama Product" />
      </Form.Item>
      <Form.Item
        name={["Product", "kategory"]}
        label="Kategori"
        rules={[{required: true, message: "Kategori is required!"}]}
        style={{marginBottom: 12}}
      >
        <Select placeholder="Pilih kategori">
          <Select.Option value="NonFood">Non Food</Select.Option>
          <Select.Option value="Food">Food</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={["Product", "jumlah"]}
        label="Jumlah"
        rules={[{type: "number", min: 0, max: 99}]}
        style={{marginBottom: 12}}
      >
        <InputNumber style={{width: "100%"}} placeholder="0" />
      </Form.Item>
      <Form.Item name={["Product", "deskripsi"]} label="Deskripsi" rules={[{required: true}]}>
        <Input.TextArea rows={4} placeholder="Masukkan deskripsi Product" />
      </Form.Item>
      <Form.Item style={{marginBottom: 0, textAlign: "right"}}>
        <Space>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
