import React from "react";
import styled from "styled-components";
import { Container, Typography, LinearProgress } from "@mui/material";
import {useSelector} from "react-redux";
const FormContainer: React.FC<any> = ({ children, title }) => {
    const {isLoading} = useSelector((store: any) => store.user);
  return (
    <StyledContainer>
      <Typography variant="h4" mb={2} fontSize={22}>
        {title}
      </Typography>
      {children}
      {isLoading && (
        <LinearProgress
          sx={{ position: "absolute", width: "100%", left: 0, bottom: 0 }}
        />
      )}
    </StyledContainer>
  );
};

export default FormContainer;

const StyledContainer = styled(Container)`
  && {
    position: relative;
    margin-top: 40px;
    width: 450px;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
