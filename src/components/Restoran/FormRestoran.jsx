import { Button, Form, Input, Space, Row, Col, Select } from "antd";

function FormRestoran(props) {
  const [form] = Form.useForm();
  const { setRestorans, setIsModalOpen } = props;

  const validateMessages = {
    required: "${label} wajib diisi!",
    types: {
      email: "${label} bukan email yang valid!",
      number: "${label} bukan angka yang valid!",
    },
  };

  const onFinish = (values) => {
    const kodeRestoran = `restoran${Math.floor(1000 + Math.random() * 9000)}`;
    setRestorans((prev) => [...prev, { kodeRestoran, ...values }]);
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
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
          <Form.Item
            name="kode_restoran"
            label="Kode Restoran"
            rules={[{ required: true }]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Masukkan kode restoran" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item
            name="area_restoran"
            label="Area Restoran"
            rules={[{ required: true }]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Masukkan area restoran" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8]}>
        <Col span={24}>
          <Form.Item
            name="nama_restoran"
            label="Nama Restoran"
            rules={[{ required: true }]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Masukkan nama restoran" />
          </Form.Item>
        </Col>
      </Row>
        <Row gutter={[8]}>
        <Col span={24}>
            <Form.Item
              name="keterangan"
              label="keterangan"
              rules={[{ required: true, message: "Type  is required!" }]}
              style={{ marginBottom: 12 }}
            >
              <Select placeholder="Pilih keterangan">
                <Select.Option value="aktif">aktif</Select.Option>
                <Select.Option value="tidak aktif">tidak aktif</Select.Option>
              </Select>
            </Form.Item>
             </Col>
      </Row>
      <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
        <Space>
          <Button onClick={() => setIsModalOpen(false)}>Batal</Button>
          <Button type="primary" htmlType="submit">
            Simpan
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default FormRestoran;
