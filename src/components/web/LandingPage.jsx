import {Row, Col} from "antd";
import Header from "./Header.jsx";
// Styles
const styles = {
  pageContainer: {
    minHeight: "100vh",
    background: "#f5f5f5",
  },
  pageTitle: {
    padding: "5px 0",
    background: "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
  },
};

// Main Component
export default function LandingPage(props) {
  return (
    <div style={styles.pageContainer}>
      <Header />
      <div style={styles.pageTitle}>
        <Row justify="center">
          <Col xs={22} sm={22} md={20}>
            <span
              style={{
                color: "white",
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              }}
            >
              {props.pageTitle || "Welcome to Our Application"}
            </span>
          </Col>
        </Row>
      </div>
      {props.children}
    </div>
  );
}
