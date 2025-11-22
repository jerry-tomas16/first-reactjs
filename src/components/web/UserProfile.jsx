import { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const styles = {
  userBalance: {
    margin: 0,
    fontSize: "0.8rem",
    color: "#10b981",
    fontWeight: "700",
  },
};
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
export default UserProfile;
