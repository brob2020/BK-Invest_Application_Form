import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import React from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const DateFieldInput = (props: any) => {
  const { errorText, ...rest } = props;
  const [field, meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;

  const renderHelperText = () => {
    const { touched, error } = meta;
    if (touched && error) {
      return error;
    }
  };

  const handleChange = (newValue: any) => {
    const val = dayjs(newValue);
    setValue(val.toDate());
  };
  return (
    <DatePicker
     /*  slotProps={{
        textField: {
          helperText: renderHelperText(),
        },
      }} */
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};
