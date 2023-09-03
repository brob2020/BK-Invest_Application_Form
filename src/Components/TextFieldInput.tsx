import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export const TextFieldInput = (props: any) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  const renderHelperText = () => {
    const { touched, error } = meta;
    if (touched && error) return error;
  };
  return (
    <TextField
      type="text"
      error={!!meta.touched && !!meta.error}
      helperText={renderHelperText()}
      {...field}
      {...rest}
    />
  );
};
