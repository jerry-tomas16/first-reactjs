import {Button, Form, Input, Select, Space, Card, Row, Col, message} from "antd";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {postDataBank, getListBank} from "../../store/bank/actions"; 


export default function FormBank(props) {
  const [form] = Form.useForm();
  const {setBanks, setIsModalOpen} = props;
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
 const dispatch = useDispatch();
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

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Data bank berhasil disimpan!",
    });
  };
  const onFinish = (values) => {
    console.log("cek", values);
    setIsSubmitLoading(true);
    dispatch(postDataBank(values.bank))
      .then((res) => {
        console.log("cek", res);
        if (res.status === 201) {
        success();
        form.resetFields();
        setIsSubmitLoading(false);
        dispatch(getListBank());
        setTimeout(() => {
          setIsModalOpen(false);
        }, 400); 
      } 
      })
      .catch((error) => {
        console.error("err", error);
        setIsSubmitLoading(false);
      });

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
                name={["bank", "bank_code"]}
                label="Code Bank"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Input placeholder="Masukkan code bank" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name={["bank", "bank_name"]}
                label="Nama bank"
                rules={[{type: "string", required: true}]}
                style={{marginBottom: 4}}
              >
                <Input placeholder="Masukkan nama bank" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24}>
              <Form.Item
                name={["bank", "bank_status"]}
                label="Status"
                rules={[{required: true}]}
                style={{marginBottom: 4}}
              >
                <Select placeholder="Pilih Status">
                  <Select.Option value="active">Aktif</Select.Option>
                  <Select.Option value="in_active">In Aktif</Select.Option>
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
            <Button type="primary" htmlType="submit" style={{minWidth: 120}} loading={isSubmitLoading} >
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
