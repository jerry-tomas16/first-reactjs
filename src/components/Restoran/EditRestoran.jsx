import {Button, Form, Input, Space, Select, Row, Col} from "antd";
import {useEffect} from "react";

export default function EditRestoran(props) {
  const [form] = Form.useForm();
  const {setIsModalOpen, selectedRestoran, handleUpdate} = props;

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
    if (selectedRestoran) {
      form.setFieldsValue({
        restoran: selectedRestoran,
      });
    }
  }, [selectedRestoran, form]);
  const onFinish = (values) => {
    handleUpdate(values.restoran);
    form.resetFields();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 100);
  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish} validateMessages={validateMessages} size="middle">
        <Row gutter={[8]}>
          <Col span={24}>
            <Form.Item name={["restoran", "kodeRstoran"]} hidden>
              <Input />
            </Form.Item>
            <Form.Item
              name={["restoran", "kode_restoran"]}
              label="Kode Restoran"
              rules={[{required: true}]}
              style={{marginBottom: 12}}
            >
              <Input placeholder="Masukkan kode restoran" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8]}>
          <Col span={24}>
            <Form.Item
              name={["restoran", "area_restoran"]}
              label="Area Restoran"
              rules={[{required: true}]}
              style={{marginBottom: 12}}
            >
              <Input placeholder="Masukkan area restoran" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name={["restoran", "nama_restoran"]}
          label="Nama Restoran"
          rules={[{required: true}]}
          style={{marginBottom: 12}}
        >
          <Input placeholder="Masukkan nama restoran" />
        </Form.Item>

        <Row gutter={[8]}>
          <Col span={24}>
            <Form.Item
              name={["restoran", "keterangan"]}
              label="keterangan"
              rules={[{required: true, message: "Type  is required!"}]}
              style={{marginBottom: 12}}
            >
              <Select placeholder="Pilih keterangan">
                <Select.Option value="aktif">aktif</Select.Option>
                <Select.Option value="tidak aktif">tidak aktif</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{textAlign: "right", marginBottom: 0}}>
          <Space>
            <Button onClick={() => setIsModalOpen(false)}>Batal</Button>
            <Button type="primary" htmlType="submit">
              update
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
