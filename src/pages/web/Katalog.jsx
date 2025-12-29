import LandingPage from "../../components/web/LandingPage.jsx";
import {Watermark, Row, Col, Select, Input} from "antd";
const styles = {
  menuCard: {
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  menuImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  locationBadge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    background: "rgba(255,255,255,0.95)",
    padding: "6px 12px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
  },
  orderButton: {
    background: "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "0.85rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
// Data
const menuItems = [
  {
    image: "https://picsum.photos/seed/bakso/300/200",
    location: "Jakarta Pusat",
    vendor: "Warung Bakso Pak Joko",
    title: "Bakso",
    description: "Bakso Daging",
    price: "Rp.20000",
  },
  {
    image: "https://picsum.photos/seed/mieayam/300/200",
    location: "Jakarta Selatan",
    vendor: "Warung Mie Pak Budi",
    title: "Mie Ayam",
    description: "Topping Ayam, Topping Jamur",
    price: "Rp.15000",
  },
  {
    image: "https://picsum.photos/seed/esteh/300/200",
    location: "Jakarta Barat",
    vendor: "Kedai Minuman Segar",
    title: "Es Teh",
    description: "Jasmine, Lychee, Oolong",
    price: "Rp.8000",
  },
  {
    image: "https://picsum.photos/seed/esjeruk/300/200",
    location: "Jakarta Timur",
    vendor: "Kedai Minuman Segar",
    title: "Es Jeruk",
    description: "Nipis, Lemon, Jeruk Asli",
    price: "Rp.10000",
  },
];

const locationOptions = [
  {value: "", label: "📍 Semua Lokasi"},
  {value: "jakarta-pusat", label: "📍 Jakarta Pusat"},
  {value: "jakarta-selatan", label: "📍 Jakarta Selatan"},
  {value: "jakarta-barat", label: "📍 Jakarta Barat"},
  {value: "jakarta-timur", label: "📍 Jakarta Timur"},
  {value: "jakarta-utara", label: "📍 Jakarta Utara"},
];

const MenuCard = ({image, location, vendor, title, description, price}) => (
  <Col xs={24} sm={12} lg={6}>
    <div
      style={styles.menuCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(2,100,165,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      <div style={{position: "relative"}}>
        <img src={image} alt={title} style={styles.menuImage} />
        <div style={styles.locationBadge}>
          <p
            style={{
              margin: 0,
              color: "#2d3748",
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            📍 {location}
          </p>
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            margin: "0 0 12px 0",
            color: "#0264A5",
            fontSize: "0.8rem",
            fontWeight: "600",
          }}
        >
          {vendor}
        </p>
        <h3
          style={{
            color: "#2d3748",
            margin: "0 0 8px 0",
            fontSize: "1.2rem",
            fontWeight: "700",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#718096",
            fontSize: "0.85rem",
            margin: "0 0 16px 0",
            flex: 1,
          }}
        >
          {description}
        </p>

        <div style={{marginBottom: 8, width: "100%"}}>
          <label
            style={{
              display: "block",
              marginBottom: 6,
              color: "#4a5568",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            Catatan :
          </label>
          <Input.TextArea
            placeholder="Contoh: kurang pedas, tanpa bawang..."
            autoSize={{minRows: 1, maxRows: 4}}
            size="small"
            style={{
              width: "100%",
              borderRadius: 8,
              resize: "none",
              border: "1px solid #e2e8f0",
              padding: 8,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "12px",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <p
            style={{
              color: "#0264A5",
              fontWeight: "700",
              fontSize: "1.3rem",
              margin: 0,
            }}
          >
            {price}
          </p>
          {/* <button style={styles.orderButton}>+ Pesan</button> */}
          <div style={{display: "flex", alignItems: "center", gap: 8}}>
            <button
              type="button"
              onClick={(e) => {
                const span = e.currentTarget.nextElementSibling;
                let v = parseInt(span.getAttribute("data-value"), 10);
                if (isNaN(v)) v = 1;
                v = Math.max(0, v - 1);
                span.setAttribute("data-value", v);
                span.textContent = v;
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                background: "white",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              -
            </button>

            <span data-value="1" style={{minWidth: 28, textAlign: "center", fontWeight: 700}}>
              1
            </span>

            <button
              type="button"
              onClick={(e) => {
                const span = e.currentTarget.previousElementSibling;
                let v = parseInt(span.getAttribute("data-value"), 10);
                if (isNaN(v)) v = 1;
                v = v + 1;
                span.setAttribute("data-value", v);
                span.textContent = v;
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                background: "#0264A5",
                color: "white",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </Col>
);

export default function Katalog() {
  return (
    <>
      <Watermark content="Team support Fed Insight">
        <LandingPage pageTitle="Katalog Menu">
          {/* Search & Filter */}
          <div style={{padding: "20px 0", background: "#f5f5f5"}}>
            <Row justify="center">
              <Col xs={22} sm={22} md={20}>
                <Row gutter={[8, 8]} justify="end">
                  <Col xs={24} sm={12} md={8} lg={6}>
                    <Select
                      defaultValue=""
                      style={{width: "100%"}}
                      size="large"
                      placeholder="📍 Semua Lokasi"
                      options={locationOptions}
                    />
                  </Col>
                  <Col xs={24} sm={12} md={10} lg={8}>
                    <Input
                      placeholder="🔍 Cari menu makanan atau minuman..."
                      size="large"
                      style={{borderRadius: "8px"}}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {/* Menu Grid */}
          <div style={{padding: "15px 0"}}>
            <Row justify="center">
              <Col xs={22} sm={22} md={20}>
                <Row gutter={[12, 12]}>
                  {menuItems.map((item, index) => (
                    <MenuCard key={index} {...item} />
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </LandingPage>
      </Watermark>
    </>
  );
}
