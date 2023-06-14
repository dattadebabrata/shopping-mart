import React from "react";
import styled from "styled-components";
import { Container, Typography } from "@mui/material";
const FormContainer: React.FC<any> = ({ children, title }) => {
  return (
    <StyledContainer>
      <Typography variant="h4" mb={2} fontSize={22}>
        {title}
      </Typography>
      {children}
    </StyledContainer>
  );
};

export default FormContainer;

const StyledContainer = styled(Container)`
  && {
    margin-top: 40px;
    width: 450px;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
