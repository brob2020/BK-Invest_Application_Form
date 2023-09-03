import { Grid, Paper } from "@mui/material";
/* import { Form, Formik } from "formik"; */
import React from "react";
/* import registrationFormInitialValues from "./registrationFormInitialValues";
import registrationFormValidationSchema from "./registrationFormValidationSchema";
import { RegistrationFormValues } from "./RegistrationFormValues";
import { TextFieldInput } from "../TextFieldInput"; */
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationFormWrapper = () => {
  return (
    <Grid container component="main" direction={"row"} sx={{ height: "100vh" }}>
      <Grid
        item
         //xs={12}
        // sm={4}
        sm={false}
        md={7}
        component={Paper}
        elevation={6}
        sx={{
          backgroundImage:
            "url(/const.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        xs={12}
        // sm={8}
        sm={12}
        md={5}
        component={Paper}
        elevation={6}
        sx={{
          backgroundColor: "#e2e9f0"
        }}>
         <RegistrationForm /> 
        
      </Grid>
    </Grid>
  );
};
