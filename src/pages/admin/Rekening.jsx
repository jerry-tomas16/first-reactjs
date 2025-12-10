import React, { useState } from "react";
import { Row, Col, Button, Input,Select, Card, space, Typography } from "antd";
import { 
  PlusOutlined,
  SearchOutlined,
  FilterOutlined, } from "@ant-design/icons";
import Navigation from "../../layouts/Navigation";
import CostumeModal from "../..components/CostumeModal";
const { Title } = Typography;

function Rekening() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedRekening, setSelectedRekening] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [searchText,setSearchText] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [rekening, setRekening] = useState([
        {
            nama_bank: "BCA",
            nama_pemilik: "Jeri",
            nomer_rekening: "5470058295",
            status: "Aktif"
        },
    ]);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleDeleteRow = (record) => {
        const filteredData = rekening.filter(
            (item) => item.nama_bank !== record.nama_bank
        );
        setRekenings(filteredData);
    };
    const filteredRekenings = rekening.filter((rekening) => {
        const matchesSearch =
        rekening.nama_bank.toLowerCase().includes(searchText.toLowerCase()) ||
        rekening.nama_pemilik.toLowerCase().includes(searchText.toLowerCase());
    const filterStatus =
      filterStatus === "all" || rekening.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
    const handleUpdatedata = (record) => {
        const updatedRekenings = rekenings.map((rekening) => 
        rekening.nama_bank === record.nama_bank ? record : rekening,
    );
    setRekenings(updatedRekenings);
    };
    return (
        <Navigation>
            <CostumeModal
            isModalOpen={isOpen}
            setIsModalOpen={setIsOpen}
            title="Form Rekening"
            width={700}
            >
            <FormRekening setRekenings={setRekenings} setIsModalOpen={setIsOpen}/>
            </CostumeModal>
            
    )

}




export default Rekening;