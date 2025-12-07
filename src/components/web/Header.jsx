import { Row, Col } from "antd";
import TopUpButton from "./TopUpButton";
import UserProfile from "./UserProfile.jsx";
import { useNavigate } from "react-router-dom";
const styles = {
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
};
// Components
const NavLink = ({ href = "#", onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
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
export default function Header() {
  const navigate = useNavigate();

  const handleOpenPageTopup = () => {
    navigate("/topup-saldo");
  };
  return (
    <div style={styles.header}>
      <Row justify="center">
        <Col xs={22} sm={22} md={20}>
          <Row justify="space-between" align="middle">
            <div>
              <h1 style={styles.headerTitle}>Fed food Delivery</h1>
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="3"
                style={styles.headerSubtitle}
              >
                PT.FED Insight - Jl. Bendungan Jatiluhur No. 26, Bendungan
                Hilir, Jakarta Pusat 10210
              </marquee>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/katalog");
                }}
              >
                📚 Katalog Menu
              </NavLink>
              <NavLink href="#">🛒 Pemesanan</NavLink>
              <NavLink href="#">🕘 History</NavLink>
              <TopUpButton handleOpenPageTopup={handleOpenPageTopup} />
              <UserProfile name="John Doe" balance="Rp 150.000" />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
