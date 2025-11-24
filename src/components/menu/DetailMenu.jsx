import { Card, Row, Col, Descriptions, Typography } from "antd";
function DetailMenu({ menu = {} }) {
  if (!menu || Object.keys(menu).length === 0) return null;
  const formatRupiah = (value) => {
    if (value == null || value === "") return "-";
    const number = Number(value);
    if (Number.isNaN(number)) return value;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };
  return (
    <Card style={{ maxWidth: 720, margin: "0 auto" }} bordered>
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
              alt={menu.menu || "makanan"}
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
          <Typography.Title level={4} style={{ margin: 0 }}>
            {menu.restoran || "-"}
          </Typography.Title>
          <Typography.Text type="secondary">
            Area : {menu.area_restoran || "-"}
          </Typography.Text>
        </Col>
      </Row>

      <Descriptions column={1} size="small" bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Kode Menu">
          {menu.kodeMenu ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Nama Menu">
          {menu.menu ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Type Menu">
          {menu.type ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Harga">
          {formatRupiah(menu.harga) ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {menu.status ?? "-"}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default DetailMenu;
