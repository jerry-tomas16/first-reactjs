import {Button, Form, Input, Select, Space} from "antd";
import {useEffect} from "react";

export default function EditDeposit(props) {
  const [form] = Form.useForm();
  const {setIsModalOpen, selectedDeposit, handleUpdatedata} = props;

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
    if (selectedDeposit) {
      form.setFieldsValue({
        deposit: selectedDeposit,
      });
    }
  }, [selectedDeposit, form]);
  const onFinish = (values) => {
    handleUpdatedata(values.deposit);
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
          name={["deposit", "status"]}
          label="Status"
          rules={[{required: true, message: "Status is required!"}]}
        >
          <Select placeholder="Pilih status">
            <Select.Option value="on_approve">On Approve</Select.Option>
            <Select.Option value="approved">Approved</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item style={{textAlign: "right", marginBottom: 0}}>
          <Space>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              update
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
