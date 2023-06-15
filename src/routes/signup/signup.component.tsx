import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { Container, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import FormContainer from "../../components/form-Container/form-container.component";
import { useDispatch,useSelector } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
const Signup: React.FC = () => {
  const { isLoading } = useSelector((store: any) => store.user);
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(signUpStart(values));
    },
    validateOnBlur: true,
    validationSchema,
  });
  return (
    <FormContainer title="Signup">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        />
        {formik.errors.name && formik.touched.name && (
          <Typography
            variant="caption"
            component="p"
            color="error"
            textAlign="left"
          >
            {formik.errors.name}
          </Typography>
        )}
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
          Already have an account? <StyledLink to="/login">Login</StyledLink>
        </Typography>
        <Button
          disabled={isLoading}
          type="submit"
          variant="contained"
          fullWidth
        >
          Signup
        </Button>
      </form>
    </FormContainer>
  );
};

export default Signup;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;
