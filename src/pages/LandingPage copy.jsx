import { Watermark, Row, Col, Avatar, Select, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
export default function LandingPage() {
  return (
    <Watermark content="Team support Fed Insight">
      <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
        <div
          style={{
            background: "white",
            padding: "20px 0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Row justify="center">
            <Col xs={22} sm={24} md={20}>
              <Row justify="space-between" align="middle">
                <div>
                  <h1 style={{ margin: 0, color: "#4a5568" }}>
                    Fed food Delivery
                  </h1>
                  <p
                    style={{
                      margin: "5px 0 0 0",
                      color: "#718096",
                      fontSize: "0.9rem",
                    }}
                  >
                    PT.FED Insight - Jl. Bendungan Jatiluhur No. 26, Bendungan
                    Hilir, Jakarta Pusat 10210
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#0264A5",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      position: "relative",
                      padding: "5px 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#014a7a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0264A5";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Katalog Menu
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#0264A5",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      position: "relative",
                      padding: "5px 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#014a7a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0264A5";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Pemesanan
                  </a>
                  <button
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      color: "white",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "25px",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(16, 185, 129, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(16, 185, 129, 0.3)";
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>💰</span>
                    Top Up Saldo
                  </button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "#2d3748",
                          fontWeight: "600",
                        }}
                      >
                        John Doe
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.8rem",
                          color: "#10b981",
                          fontWeight: "700",
                        }}
                      >
                        Rp 150.000
                      </p>
                    </div>
                    <Avatar
                      size={45}
                      icon={<UserOutlined />}
                      style={{
                        background:
                          "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
        {/* Page Title */}
        <div
          style={{
            padding: "5px 0",
            background: "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
          }}
        >
          <Row justify="center">
            <Col xs={22} sm={24} md={20}>
              <span style={{ color: "white", fontSize: "1.5rem" }}>
                Katalog Menu
              </span>
            </Col>
          </Row>
        </div>
        <div style={{ padding: "20px 0", background: "#f5f5f5" }}>
          <Row justify="center">
            <Col xs={22} sm={24} md={20}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={4}>
                  <Select
                    defaultValue=""
                    style={{
                      width: "100%",
                    }}
                    size="large"
                    placeholder="📍 Semua Lokasi"
                    options={[
                      { value: "", label: "📍 Semua Lokasi" },
                      { value: "jakarta-pusat", label: "📍 Jakarta Pusat" },
                      { value: "jakarta-selatan", label: "📍 Jakarta Selatan" },
                      { value: "jakarta-barat", label: "📍 Jakarta Barat" },
                      { value: "jakarta-timur", label: "📍 Jakarta Timur" },
                      { value: "jakarta-utara", label: "📍 Jakarta Utara" },
                    ]}
                  />
                </Col>
                <Col xs={24} md={6}>
                  <Input
                    placeholder="🔍 Cari menu makanan atau minuman..."
                    size="large"
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* Menu Grid */}
        <div style={{ padding: "40px 0" }}>
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={22} sm={20} md={20}>
              <Row gutter={[24, 24]}>
                {/* Bakso */}
                <Col xs={24} sm={12} lg={6}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(2,100,165,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src="https://picsum.photos/seed/bakso/300/200"
                        alt="Bakso"
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "rgba(255,255,255,0.95)",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            color: "#2d3748",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                          }}
                        >
                          📍 Jakarta Pusat
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
                      <div style={{ marginBottom: "12px" }}>
                        <p
                          style={{
                            margin: 0,
                            color: "#0264A5",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Warung Bakso Pak Joko
                        </p>
                      </div>
                      <h3
                        style={{
                          color: "#2d3748",
                          margin: "0 0 8px 0",
                          fontSize: "1.2rem",
                          fontWeight: "700",
                        }}
                      >
                        Bakso
                      </h3>
                      <p
                        style={{
                          color: "#718096",
                          fontSize: "0.85rem",
                          margin: "0 0 16px 0",
                          lineHeight: "1.5",
                          flex: 1,
                        }}
                      >
                        Bakso Daging
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
                          Rp.20000
                        </p>
                        <button
                          style={{
                            background:
                              "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          + Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(2,100,165,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src="https://picsum.photos/seed/mieayam/300/200"
                        alt="Mie Ayam"
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "rgba(255,255,255,0.95)",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            color: "#2d3748",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                          }}
                        >
                          📍 Jakarta Selatan
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
                      <div style={{ marginBottom: "12px" }}>
                        <p
                          style={{
                            margin: 0,
                            color: "#0264A5",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Warung Mie Pak Budi
                        </p>
                      </div>
                      <h3
                        style={{
                          color: "#2d3748",
                          margin: "0 0 8px 0",
                          fontSize: "1.2rem",
                          fontWeight: "700",
                        }}
                      >
                        Mie Ayam
                      </h3>
                      <p
                        style={{
                          color: "#718096",
                          fontSize: "0.85rem",
                          margin: "0 0 16px 0",
                          lineHeight: "1.5",
                          flex: 1,
                        }}
                      >
                        Topping Ayam, Topping Jamur
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
                          Rp.15000
                        </p>
                        <button
                          style={{
                            background:
                              "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          + Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Es Teh */}
                <Col xs={24} sm={12} lg={6}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(2,100,165,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src="https://picsum.photos/seed/esteh/300/200"
                        alt="Es Teh"
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "rgba(255,255,255,0.95)",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            color: "#2d3748",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                          }}
                        >
                          📍 Jakarta Barat
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
                      <div style={{ marginBottom: "12px" }}>
                        <p
                          style={{
                            margin: 0,
                            color: "#0264A5",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Kedai Minuman Segar
                        </p>
                      </div>
                      <h3
                        style={{
                          color: "#2d3748",
                          margin: "0 0 8px 0",
                          fontSize: "1.2rem",
                          fontWeight: "700",
                        }}
                      >
                        Es Teh
                      </h3>
                      <p
                        style={{
                          color: "#718096",
                          fontSize: "0.85rem",
                          margin: "0 0 16px 0",
                          lineHeight: "1.5",
                          flex: 1,
                        }}
                      >
                        Jasmine, Lychee, Oolong
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
                          Rp.8000
                        </p>
                        <button
                          style={{
                            background:
                              "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          + Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Es Jeruk */}
                <Col xs={24} sm={12} lg={6}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(2,100,165,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src="https://picsum.photos/seed/esjeruk/300/200"
                        alt="Es Jeruk"
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "rgba(255,255,255,0.95)",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            color: "#2d3748",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                          }}
                        >
                          📍 Jakarta Timur
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
                      <div style={{ marginBottom: "12px" }}>
                        <p
                          style={{
                            margin: 0,
                            color: "#0264A5",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Kedai Minuman Segar
                        </p>
                      </div>
                      <h3
                        style={{
                          color: "#2d3748",
                          margin: "0 0 8px 0",
                          fontSize: "1.2rem",
                          fontWeight: "700",
                        }}
                      >
                        Es Jeruk
                      </h3>
                      <p
                        style={{
                          color: "#718096",
                          fontSize: "0.85rem",
                          margin: "0 0 16px 0",
                          lineHeight: "1.5",
                          flex: 1,
                        }}
                      >
                        Nipis, Lemon, Jeruk Asli
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
                          Rp.10000
                        </p>
                        <button
                          style={{
                            background:
                              "linear-gradient(135deg, #0264A5 0%, #014a7a 100%)",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          + Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Watermark>
  );
}
