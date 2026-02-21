import {Button, Form, Input, Select, Space, Card, Row, Col} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useEffect} from "react";

export default function EditBank(props) {
  const [form] = Form.useForm();
  const {selectedBank, setIsModalOpen, handleUpdatedata} = props;
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
  useEffect(() => {
    if (!selectedBank) return;
    const data = Array.isArray(selectedBank) ? selectedBank[0] : selectedBank;
    form.setFieldsValue({bank: data});
  }, [selectedBank, form]);

  const onFinish = (values) => {
    const bank = values?.bank;
    if (!bank) return;
    handleUpdatedata(bank);
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
          title=" Informasi Bank"
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
                name={["bank", "code_bank"]}
                label="Code Bank"
                rules={[{type: "string", required: true}]}
                style={{marginBottom: 4}}
              >
                <Input placeholder="Masukkan code bank" disabled={true} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={["bank", "nama_bank"]}
                label="Nama Bank"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Input placeholder="Masukkan nama bank" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24}>
              <Form.Item
                name={["bank", "status"]}
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
              Update
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
