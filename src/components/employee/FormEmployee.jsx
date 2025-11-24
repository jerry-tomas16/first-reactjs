import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Card,
  Row,
  Col,
} from "antd";
import { UserOutlined, MailOutlined, IdcardOutlined } from "@ant-design/icons";

export default function FormEmployee(props) {
  const [form] = Form.useForm();
  const { setEmployees, setIsModalOpen } = props;

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
    setEmployees((prev) => [...prev, values.user]);
    form.resetFields();
    setTimeout(() => {
      setIsModalOpen(false);
    }, 100);
  };

  return (
    <div>
      <Form
        form={form}
        name="employee-form"
        onFinish={onFinish}
        layout="vertical"
        validateMessages={validateMessages}
        size="middle"
      >
        <Card
          title="👤 Informasi Pribadi"
          bordered={false}
          headStyle={{
            background: "#f5f5f5",
            color: "#262626",
          }}
          bodyStyle={{ padding: "20px" }}
          style={{
            marginBottom: 12,
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <Row gutter={[8]}>
            <Col span={24}>
              <Form.Item
                name={["user", "name"]}
                label="Nama Lengkap"
                rules={[{ required: true }]}
                style={{ marginBottom: 12 }}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Masukkan nama lengkap"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email", required: true }]}
                style={{ marginBottom: 12 }}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="contoh@email.com"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                name={["user", "usia"]}
                label="Usia"
                rules={[{ type: "number", min: 17, max: 99, required: true }]}
                style={{ marginBottom: 12 }}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Usia"
                  min={17}
                  max={99}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                name={["user", "jenis_kelamin"]}
                label="Jenis Kelamin"
                rules={[{ required: true }]}
                style={{ marginBottom: 12 }}
              >
                <Select placeholder="Pilih Jenis Kelamin">
                  <Select.Option value="Laki-laki">Laki-laki</Select.Option>
                  <Select.Option value="Perempuan">Perempuan</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["user", "alamat"]}
                label="Alamat"
                style={{ marginBottom: 0 }}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Masukkan alamat lengkap"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card
          title="💼 Informasi Pekerjaan"
          bordered={false}
          headStyle={{
            background: "#f5f5f5",
            color: "#262626",
          }}
          bodyStyle={{ padding: "20px" }}
          style={{
            marginBottom: 16,
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <Row gutter={[8]}>
            <Col xs={24} sm={12}>
              <Form.Item
                name={["user", "pendidikan"]}
                label="Pendidikan Terakhir"
                rules={[{ required: true }]}
                style={{ marginBottom: 12 }}
              >
                <Select placeholder="Pilih Pendidikan">
                  <Select.Option value="SMA/SMK">SMA/SMK</Select.Option>
                  <Select.Option value="D3">D3</Select.Option>
                  <Select.Option value="S1">S1</Select.Option>
                  <Select.Option value="S2">S2</Select.Option>
                  <Select.Option value="S3">S3</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                name={["user", "status"]}
                label="Status Karyawan"
                rules={[{ required: true }]}
                style={{ marginBottom: 12 }}
              >
                <Select placeholder="Pilih Status">
                  <Select.Option value="Tetap">Tetap</Select.Option>
                  <Select.Option value="Kontrak">Kontrak</Select.Option>
                  <Select.Option value="Magang">Magang</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["user", "jabatan"]}
                label="Jabatan"
                rules={[{ required: true }]}
                style={{ marginBottom: 12 }}
              >
                <Input
                  prefix={<IdcardOutlined />}
                  placeholder="Masukkan jabatan"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Form.Item style={{ marginBottom: 0, marginTop: 16 }}>
          <Space style={{ width: "100%", justifyContent: "flex-end" }}>
            <Button
              onClick={() => setIsModalOpen(false)}
              style={{ minWidth: 100 }}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" style={{ minWidth: 120 }}>
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
