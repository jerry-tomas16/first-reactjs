import Navigation from "../layouts/Navigation";
import { Row, Col, Button } from "antd";
import ListTable from "../components/makanan/TableMakanan";
import { useState } from "react";
function Makanan() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [makanans, setMakanans] = useState([
    {
      restoran: "Restoran A",
      name: "Nasi Goreng",
      area_restoran: "Jakarta",
      harga: 20000,
      status: "Tersedia",
    },
  ]);
  return (
    <Navigation>
      <Row align="middle" justify="space-between">
        <Col span={12}>
          <h2>List Menu Makanan</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary">Add Menu Makanan</Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          <ListTable makanans={makanans} />
        </Col>
      </Row>
    </Navigation>
  );
}
export default Makanan;
