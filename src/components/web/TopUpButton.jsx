const styles = {
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
};
const TopUpButton = (props) => {
  const { handleOpenPageTopup } = props;
  return (
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
      onClick={handleOpenPageTopup}
    >
      <span style={{ fontSize: "1.2rem" }}>💰</span>
      Top Up Saldo
    </button>
  );
};

export default TopUpButton;
