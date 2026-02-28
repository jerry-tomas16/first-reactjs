import {Button, Form, Input, Select, Space, Card, Row, Col, message} from "antd";
import {UserOutlined, MailOutlined, IdcardOutlined} from "@ant-design/icons";
// import {postDataMenu, getListMenu} from "../../store/menu/action";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRestoranByArea} from "../../store/menu/actions";
export default function FormMenu(props) {
  const [form] = Form.useForm();
  const {setMenus, setIsModalOpen} = props;
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const listRestoran = useSelector((state) => state.menu.dataRestoranByArea);
  console.log("listRestoran", listRestoran);
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

  const changeRestoran = (value) => {
    console.log("value", value);
    dispatch(getRestoranByArea(value));
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Data menu berhasil disimpan!",
    });
  };

  const onFinish = (values) => {
    const kodeMakanan = `menu${Math.floor(1000 + Math.random() * 9000)}`;
    setMenus((prev) => [...prev, {kodeMakanan, ...values.menu}]);
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
        <Form.Item
          name={["menu", "area_restoran"]}
          label="Area Restoran"
          rules={[{required: true}]}
          style={{marginBottom: 12}}
        >
          <Select placeholder="Pilih area restoran" onChange={changeRestoran}>
            <Select.Option value="food court Bri">Food Court Bri</Select.Option>
            <Select.Option value="food court RS AL">Food Court RS AL</Select.Option>
            <Select.Option value="food court Mesjid">Food Court Mesjid</Select.Option>
            <Select.Option value="food court kantin BW">Food Court Kantin BW</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["menu", "restoran"]}
          label="Nama Restoran"
          rules={[{required: true}]}
          style={{marginBottom: 12}}
        >
          <Select placeholder="Masukkan nama restoran">
            {listRestoran?.data.map((item) => (
              <Select.Option key={item.id} value={item.restoran_name}>
                {item.restoran_name}
              </Select.Option>
            ))}
          </Select>
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
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
