import { Watermark, Row, Col, Avatar, Select, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
// Styles
const styles = {
  pageContainer: {
    minHeight: "100vh",
    background: "#f5f5f5",
  },
  header: {
    background: "white",
    padding: "20px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  headerTitle: {
    margin: 0,
    color: "#4a5568",
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
  },
  headerSubtitle: {
    margin: "5px 0 0 0",
    color: "#718096",
    fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
  },
  navLink: {
    color: "#0264A5",
    textDecoration: "none",
    transition: "all 0.3s ease",
    padding: "5px 0",
    fontSize: "clamp(0.85rem, 2vw, 1rem)",
  },
  topUpButton: {
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "25px",
    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
  },
  userBalance: {
    margin: 0,
    fontSize: "0.8rem",
    color: "#10b981",
    fontWeight: "700",
  },
  pageTitle: {
    padding: "5px 0",
    background: "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
  },
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

// Components
const NavLink = ({ href, children }) => (
  <a
    href={href}
    style={styles.navLink}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = "#014a7a";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "#0264A5";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {children}
  </a>
);

const TopUpButton = () => (
  <button
    style={styles.topUpButton}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(16, 185, 129, 0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.3)";
    }}
  >
    <span style={{ fontSize: "1.2rem" }}>💰</span>
    Top Up Saldo
  </button>
);

const UserProfile = ({ name, balance }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
          padding: "8px 12px",
          borderRadius: "12px",
          background: dropdownVisible
            ? "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)"
            : "transparent",
          transition: "all 0.3s ease",
        }}
        onClick={() => setDropdownVisible(!dropdownVisible)}
        onMouseEnter={(e) => {
          if (!dropdownVisible) {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)";
          }
        }}
        onMouseLeave={(e) => {
          if (!dropdownVisible) {
            e.currentTarget.style.background = "transparent";
          }
        }}
      >
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.85rem",
              color: "#0c4a6e",
              fontWeight: "700",
            }}
          >
            {name}
          </p>
          <p style={{ ...styles.userBalance, color: "#0284c7" }}>
            💵 {balance}
          </p>
        </div>
        <Avatar
          size={48}
          icon={<UserOutlined />}
          style={{
            background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
            cursor: "pointer",
            border: "3px solid #bae6fd",
            boxShadow: "0 4px 12px rgba(56, 189, 248, 0.3)",
          }}
        />
      </div>
      {dropdownVisible && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            right: 0,
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(56, 189, 248, 0.25)",
            minWidth: "180px",
            zIndex: 1000,
            border: "2px solid #bae6fd",
            overflow: "hidden",
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "14px 18px",
              border: "none",
              background: "transparent",
              color: "#0c4a6e",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)";
              e.currentTarget.style.color = "#0369a1";
              e.currentTarget.style.paddingLeft = "22px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#0c4a6e";
              e.currentTarget.style.paddingLeft = "18px";
            }}
            onClick={() => {
              // Handle logout logic here
              console.log("Logout clicked");
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

const MenuCard = ({ image, location, vendor, title, description, price }) => (
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
      <div style={{ position: "relative" }}>
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
          <button style={styles.orderButton}>+ Pesan</button>
        </div>
      </div>
    </div>
  </Col>
);

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
  { value: "", label: "📍 Semua Lokasi" },
  { value: "jakarta-pusat", label: "📍 Jakarta Pusat" },
  { value: "jakarta-selatan", label: "📍 Jakarta Selatan" },
  { value: "jakarta-barat", label: "📍 Jakarta Barat" },
  { value: "jakarta-timur", label: "📍 Jakarta Timur" },
  { value: "jakarta-utara", label: "📍 Jakarta Utara" },
];

// Main Component
export default function LandingPage() {
  return (
    <Watermark content="Team support Fed Insight">
      <div style={styles.pageContainer}>
        <div style={styles.header}>
          <Row justify="center">
            <Col xs={22} sm={22} md={20}>
              <Row justify="space-between" align="middle">
                <div>
                  <h1 style={styles.headerTitle}>Fed food Delivery</h1>
                  <p style={styles.headerSubtitle}>
                    PT.FED Insight - Jl. Bendungan Jatiluhur No. 26, Bendungan
                    Hilir, Jakarta Pusat 10210
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <NavLink href="#">Katalog Menu</NavLink>
                  <NavLink href="#">Pemesanan</NavLink>
                  <TopUpButton />
                  <UserProfile name="John Doe" balance="Rp 150.000" />
                </div>
              </Row>
            </Col>
          </Row>
        </div>
        {/* Page Title */}
        <div style={styles.pageTitle}>
          <Row justify="center">
            <Col xs={22} sm={22} md={20}>
              <span
                style={{
                  color: "white",
                  fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                }}
              >
                Katalog Menu
              </span>
            </Col>
          </Row>
        </div>
        {/* Search & Filter */}
        <div style={{ padding: "20px 0", background: "#f5f5f5" }}>
          <Row justify="center">
            <Col xs={22} sm={22} md={20}>
              <Row gutter={[8, 8]} justify="end">
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Select
                    defaultValue=""
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="📍 Semua Lokasi"
                    options={locationOptions}
                  />
                </Col>
                <Col xs={24} sm={12} md={10} lg={8}>
                  <Input
                    placeholder="🔍 Cari menu makanan atau minuman..."
                    size="large"
                    style={{ borderRadius: "8px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* Menu Grid */}
        <div style={{ padding: "15px 0" }}>
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
      </div>
    </Watermark>
  );
}
