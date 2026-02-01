import {Button, Form, Input, Select, Space, Card, Row, Col, DatePicker, message} from "antd";
import {UserOutlined, MailOutlined, IdcardOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {postDataEmployee} from "../../store/employee/actions";
import {useState} from "react";
export default function FormEmployee(props) {
  const [form] = Form.useForm();
  const {setEmployees, setIsModalOpen} = props;
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
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

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Data karyawan berhasil disimpan!",
    });
  };
  const onFinish = (values) => {
    setIsSubmitLoading(true);
    dispatch(postDataEmployee(values.user))
      .then((result) => {
        if (result.status === "success") {
          success();
          form.resetFields();
          setIsSubmitLoading(false);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 600);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
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
        {contextHolder}
        <Card
          title="👤 Informasi Pribadi"
          bordered={false}
          headStyle={{
            background: "#f5f5f5",
            color: "#262626",
          }}
          bodyStyle={{padding: "16px"}}
          style={{
            marginBottom: 8,
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <Row gutter={[8]}>
            <Col span={24}>
              <Form.Item
                name={["user", "fullname"]}
                label="Nama Lengkap"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Input prefix={<UserOutlined />} placeholder="Masukkan nama lengkap" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{type: "email", required: true}]}
                style={{marginBottom: 4}}
              >
                <Input prefix={<MailOutlined />} placeholder="contoh@email.com" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                name={["user", "birth_date"]}
                label="Tanggal Lahir"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                name={["user", "gender"]}
                label="Jenis Kelamin"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Select placeholder="Pilih Jenis Kelamin">
                  <Select.Option value="Laki-laki">Laki-laki</Select.Option>
                  <Select.Option value="Perempuan">Perempuan</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["user", "marital_status"]}
                label="Status Pernikahan"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Select placeholder="Pilih Status Pernikahan">
                  <Select.Option value="Belum Menikah">Belum Menikah</Select.Option>
                  <Select.Option value="Menikah">Menikah</Select.Option>
                  <Select.Option value="Cerai">Cerai</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name={["user", "address"]} label="Alamat" style={{marginBottom: 0}}>
                <Input.TextArea rows={2} placeholder="Masukkan alamat lengkap" />
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
          bodyStyle={{padding: "20px"}}
          style={{
            marginBottom: 16,
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <Row gutter={[8]}>
            <Col xs={24} sm={12}>
              <Form.Item
                name={["user", "education"]}
                label="Pendidikan Terakhir"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
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
                name={["user", "employee_status"]}
                label="Status Karyawan"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Select placeholder="Pilih Status">
                  <Select.Option value="Karyawan Tetap">Karyawan Tetap</Select.Option>
                  <Select.Option value="Karyawan Kontrak">Karyawan Kontrak</Select.Option>
                  <Select.Option value="Magang">Magang</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["user", "position"]}
                label="Jabatan"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Input prefix={<IdcardOutlined />} placeholder="Masukkan jabatan" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Form.Item style={{marginBottom: 0, marginTop: 16}}>
          <Space style={{width: "100%", justifyContent: "flex-end"}}>
            <Button onClick={() => setIsModalOpen(false)} style={{minWidth: 100}}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" style={{minWidth: 120}} loading={isSubmitLoading}>
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
