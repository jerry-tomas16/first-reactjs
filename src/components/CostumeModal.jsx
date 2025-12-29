import {Modal} from "antd";

const CostumeModal = (props) => {
  const {isModalOpen, setIsModalOpen, title} = props;

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={title || "Modal Title"}
        closable={{"aria-label": "Custom Close Button"}}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={props.width || 520}
        style={{top: 35}}
        styles={{
          header: {
            marginTop: -6,
            fontWeight: "600",
            paddingBottom: 6,
          },
        }}
      >
        {props.children}
      </Modal>
    </>
  );
};
export default CostumeModal;
