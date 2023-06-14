import React from "react";
import FormContainer from "../../components/form-Container/form-container.component";
import { useFormik } from "formik";
import { TextField, Typography, Button } from "@mui/material";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validationSchema,
  });
  return (
    <FormContainer title="Login">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        />
        {formik.errors.email && formik.touched.email && (
          <Typography
            variant="caption"
            component="p"
            color="error"
            textAlign="left"
          >
            {formik.errors.email}
          </Typography>
        )}
        <TextField
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        />
        {formik.errors.password && formik.touched.password && (
          <Typography
            variant="caption"
            component="p"
            color="error"
            textAlign="left"
          >
            {formik.errors.password}
          </Typography>
        )}
        <Typography variant="body1" sx={{ margin: "10px 0" }}>
          Don't have an account? <StyledLink to="/signup">Signup</StyledLink>
        </Typography>
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </FormContainer>
  );
};

export default Login;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
`;