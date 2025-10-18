import { Modal } from "antd";

const CostumeModal = (props) => {
  const { isModalOpen, setIsModalOpen, title } = props;

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={title || "Modal Title"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {props.children}
      </Modal>
    </>
  );
};
export default CostumeModal;
