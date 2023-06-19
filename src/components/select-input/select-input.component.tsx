import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

interface SelectInputProps {
  formik: any;
  name: string;
  label: string;
  states: { code: string; name: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  formik,
  name,
  label,
  states,
}) => {
  return (
    <FormControl fullWidth error={formik.errors[name] && formik.touched[name]}>
      <InputLabel id="demo-simple-select-label">{`${
        formik.errors[name] && formik.touched[name]
          ? formik.errors[name]
          : label
      }`}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formik.values[name]}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {states.map((state) => {
          return (
            <MenuItem key={state.code} value={state.name}>
              {state.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
