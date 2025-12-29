import {Card, Row, Col, Descriptions, Typography} from "antd";
function DetailStok({stokopname = {}}) {
  if (!stokopname || Object.keys(stokopname).length === 0) return null;

  return (
    <Card style={{maxWidth: 720, margin: "0 auto"}} bordered>
      <Row gutter={16} align="middle">
        <Col>
          <div
            style={{
              width: 120,
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://disporabudpar.banjarbarukota.go.id/wp-content/uploads/2017/01/IMG_2542-copy.jpeg"
              alt={stokopname.stokopname || "stokopname"}
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 8,
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                // hide broken image and let Avatar/email be used instead
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </Col>

        <Col flex="auto">
          <Typography.Title level={4} style={{margin: 0}}>
            {stokopname.NamaBarang || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">Area : {stokopname.KodeBarang || "-"}</Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{marginTop: 16}}>
        <Descriptions.Item label="Category">{stokopname.Category ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Kode Barang">{stokopname.KodeBarang ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Nama Barang">{stokopname.NamaBarang ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Quantity">{stokopname.Quantity ?? "-"}</Descriptions.Item>
        <Descriptions.Item label="Keterangan">{stokopname.Keterangan ?? "-"}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailStok;
