import {Button, Form, Input, Space, Row, Col, Select, message} from "antd";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {postDataRestoran, getListRestoran} from "../../store/restoran/actions";
function FormRestoran(props) {
  const [form] = Form.useForm();
  const {setRestorans, setIsModalOpen} = props;
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const validateMessages = {
    required: "${label} wajib diisi!",
    types: {
      email: "${label} bukan email yang valid!",
      number: "${label} bukan angka yang valid!",
    },
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Data restoran berhasil disimpan!",
    });
  };

  const onFinish = (values) => {
  console.log("cek", values);
  setIsSubmitLoading(true);
  dispatch(postDataRestoran(values, success))
    .then((res) => {
      console.log("cek", res);
      if (res.status === 201) {
        form.resetFields();
        setIsSubmitLoading(false);
        dispatch(getListRestoran());
        setTimeout(() => {
          setIsModalOpen(false);
        }, 400);
      } })
    .catch((error) => {
      console.error("err", error);
      setIsSubmitLoading(false);
    });
  };

  return (
    <div>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
      autoComplete="off"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item name="restoran_name" label="Nama Restoran" rules={[{required: true}]} style={{marginBottom: 12}}>
            <Input placeholder="Masukkan nama restoran" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item name="restoran_area" label="Area Restoran" rules={[{required: true}]} style={{marginBottom: 12}}>
            <Select placeholder="Pilih area restoran">
              <Select.Option value="food court Bri">Food Court Bri</Select.Option>
              <Select.Option value="food court RS AL">Food Court RS AL</Select.Option>
              <Select.Option value="food court Mesjid">Food Court Mesjid</Select.Option>
              <Select.Option value="food court kantin BW">Food Court Kantin BW</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item name="restoran_code" label="Kode Restoran" rules={[{required: true}]} style={{marginBottom: 12}}>
            <Input placeholder="Masukkan kode restoran" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item
            name="restoran_status"
            label="Status"
            rules={[{required: true, message: "Status is required!"}]}
            style={{marginBottom: 12}}
          >
            <Select placeholder="Pilih status">
              <Select.Option value="active">Aktif</Select.Option>
              <Select.Option value="inactive">Tidak Aktif</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item style={{textAlign: "right", marginBottom: 0}}>
        <Space>
          <Button onClick={() => setIsModalOpen(false)}>Batal</Button>
          <Button type="primary" htmlType="submit" style={{minWidth: 120}} loading={isSubmitLoading}>
            Simpan
          </Button>
        </Space>
      </Form.Item>
    </Form>
    </div>
  );
}

export default FormRestoran;
