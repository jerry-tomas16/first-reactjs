import {Button, Form, Input, Select, Space, Card, Row, Col} from "antd";
import {UserOutlined, MailOutlined} from "@ant-design/icons";
import {useState} from "react";

export default function FormBank(props) {
  const [form] = Form.useForm();
  const {setModuleBanks, setIsModalOpen} = props;
  const [listBank] = useState([
    {code: "014", name: "BCA"},
    {code: "002", name: "BRI"},
    {code: "008", name: "Mandiri"},
  ]);
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
    const modulebank = values?.modulebank;
    if (!modulebank) return;

    const {nama_bank: namaBankCode} = modulebank;
    const selectedBank = Array.isArray(listBank) ? listBank.find((b) => b.name === namaBankCode) : undefined;
    const newBank = {
      ...modulebank,
      code_bank: selectedBank?.code ?? null,
      bank_name: selectedBank?.name ?? null,
    };

    setModuleBanks((prev) => [...prev, newBank]);
    form.resetFields();
    setTimeout(() => setIsModalOpen(false), 100);
  };
  return (
    <div>
      <Form
        form={form}
        name="bank-form"
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
                name={["modulebank", "code_bank"]}
                label="Code Bank"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Select placeholder="Pilih Bank">
                  {listBank?.map((bank) => (
                    <Select.Option key={bank.code} value={bank.name}>
                      {bank.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["modulebank", "nama_bank"]}
                label="Nama bank"
                rules={[{type: "string", required: true}]}
                style={{marginBottom: 4}}
              >
                <Input prefix={<MailOutlined />} placeholder="contoh@email.com" />
              </Form.Item>
            </Col>


            <Col xs={24} sm={12}>
              <Form.Item
                name={["modulebank", "status"]}
                label="Status"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Select placeholder="Pilih Status">
                  <Select.Option value="Aktif">Aktif</Select.Option>
                  <Select.Option value="In Aktif">In Aktif</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Form.Item style={{marginBottom: 0, marginTop: 16}}>
          <Space style={{width: "100%", justifyContent: "flex-end"}}>
            <Button onClick={() => setIsModalOpen(false)} style={{minWidth: 100}}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" style={{minWidth: 120}}>
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
