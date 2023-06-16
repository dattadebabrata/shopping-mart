import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface StyledProps {
  open: boolean;
}

const CategoryDropdown = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const handleClose = () => {
    onClose(false);
  };
  return (
    <DropdownConteiner open={isOpen}>
      <Link to="/mens">
        <CustomButton onClick={handleClose} open={isOpen} fullWidth>
          Mens
        </CustomButton>
      </Link>
      <Link to="/womens">
        <CustomButton onClick={handleClose} open={isOpen} fullWidth>
          Womens
        </CustomButton>
      </Link>
      <Link to="/kids">
        <CustomButton onClick={handleClose} open={isOpen} fullWidth>
          Kids
        </CustomButton>
      </Link>
    </DropdownConteiner>
  );
};

export default CategoryDropdown;

const DropdownConteiner = styled.div<StyledProps>`
  position: absolute;
  z-index: 1;
  top: 43px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-height: ${(props) => (props.open ? "200px" : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: 0.3s ease-in-out;
  overflow: hidden;
`;

const CustomButton = styled(Button)<StyledProps>`
  && {
    background-color: white;
    color: black;
    border-radius: 0;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
