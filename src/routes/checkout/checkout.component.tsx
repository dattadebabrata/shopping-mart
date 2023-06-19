import React from "react";
import { StyledContainer } from "../home/home.component";
import { Typography, Button, TextField } from "@mui/material";
import TotalItemCalculate from "../../components/total-item-calculate/total-item-calculate.component";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/text-input/text-input.component";
import SelectInput from "../../components/select-input/select-input.component";
import db from "../../db.json";
import { useSelector, useDispatch } from "react-redux";
import { makeCartEmpty } from "../../store/cart/cart.action";

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { states } = db;
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .required("Mobile is required")
      .length(10, "Mobile number must be exactly 10 digits"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string()
      .required("Pincode is required")
      .length(6, "Pincode must be exactly 6 digits"),
    landmark: Yup.string().required("Landmark is required"),
    state: Yup.string().required("State is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      pincode: "",
      landmark: "",
      state: "",
    },
    onSubmit: async (values) => {
      dispatch(makeCartEmpty());
      navigate("/");
    },
    validateOnBlur: true,
    validationSchema,
  });
  const handleSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <StyledContainer>
      <Typography
        variant="h5"
        align="left"
        sx={{ textDecoration: "underline", margin: "20px 0" }}
      >
        Fill your Details
      </Typography>
      <Container>
        <FormContainer>
          <form noValidate>
            <TextInput formik={formik} type="text" name="name" label="Name" />
            <TextInput
              formik={formik}
              type="number"
              name="mobile"
              label="Mobile"
            />
            <TextInput
              formik={formik}
              type="text"
              name="address"
              label="Address"
            />
            <TextInput
              formik={formik}
              type="number"
              name="pincode"
              label="Pincode"
            />
            <TextInput
              formik={formik}
              type="text"
              name="landmark"
              label="Landmark"
            />
            <SelectInput
              formik={formik}
              name="state"
              label="State"
              states={states}
            />
          </form>
        </FormContainer>
        <TotalContainer>
          <TotalItemCalculate>
            <Link to="/checkout">
              <Button fullWidth variant="contained" onClick={handleSubmit}>
                Checkout
              </Button>
            </Link>
          </TotalItemCalculate>
        </TotalContainer>
      </Container>
    </StyledContainer>
  );
};

export default Checkout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TotalContainer = styled.div`
  width: calc(100% - 65%);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 5px 0;
  & > form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
