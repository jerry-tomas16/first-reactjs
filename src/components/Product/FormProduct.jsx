import {Button, Form, Input, InputNumber, Select, Space, message} from "antd";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {postDataProduct, getListProduct} from "../../store/product/actions";
export default function FormProduct(props) {
  const [form] = Form.useForm();
  const {setProducts, setIsModalOpen} = props;
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Data produk berhasil disimpan!",
    });
  };

  const onFinish = (values) => {
    console.log("cek", values);
    setIsSubmitLoading(true);
    dispatch(postDataProduct(values.produk))
      .then((res) => {
        if (res.status === "success") {
          success();
          form.resetFields();
          setIsSubmitLoading(false);
          dispatch(getListProduct());
          setTimeout(() => {
            setIsModalOpen(false);
          }, 600);
        }
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  return (
    <div>
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
          name={["produk", "kode_produk"]}
          label="Kode Produk"
          rules={[{required: true}]}
          style={{marginBottom: 12}}
        >
          <Input placeholder="Masukkan kode produk" />
        </Form.Item>

        <Form.Item
          name={["produk", "nama_produk"]}
          label="Nama Produk"
          rules={[{required: true}]}
          style={{marginBottom: 12}}
        >
          <Input placeholder="Masukkan nama produk" />
        </Form.Item>
        <Form.Item
          name={["produk", "kategory"]}
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
          name={["produk", "jumlah"]}
          label="Jumlah"
          rules={[{type: "number", min: 0, max: 99}]}
          style={{marginBottom: 12}}
        >
          <InputNumber style={{width: "100%"}} placeholder="0" />
        </Form.Item>
        <Form.Item name={["produk", "deskripsi"]} label="Deskripsi" rules={[{required: true}]}>
          <Input.TextArea rows={4} placeholder="Masukkan deskripsi produk" />
        </Form.Item>
        <Form.Item style={{marginBottom: 0, textAlign: "right"}}>
          <Space>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" style={{minWidth: 120}} loading={isSubmitLoading}>
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
