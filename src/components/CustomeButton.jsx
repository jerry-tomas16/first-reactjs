import {Button} from "antd";

const CustomeButton = ({onClick, label}) => {
  return (
    <Button type="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomeButton;
