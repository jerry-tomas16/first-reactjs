import CostumeButton from "../components/CustomeButton";
import React from "react";
function HalamanUtama() {
  return (
    <div>
      <h1>Selamat Datang di Halaman Utama</h1>
      <CostumeButton
        label="Kembali ke Home"
        onClick={() => alert("Kembali ke Home")}
      />
    </div>
  );
}
export default HalamanUtama;
