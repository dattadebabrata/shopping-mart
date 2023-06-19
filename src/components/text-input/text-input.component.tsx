import React from "react";
import { TextField, Typography } from "@mui/material";

interface TextInputProps {
  formik: any;
  name: string;
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ formik, name, label }) => {
  return (
    <div>
      <TextField
        onChange={formik.handleChange}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        name={name}
        label={`${
          formik.errors[name] && formik.touched[name]
            ? formik.errors[name]
            : label
        }`}
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        error={formik.errors[name] && formik.touched[name]}
      />
    </div>
  );
};

export default TextInput;
