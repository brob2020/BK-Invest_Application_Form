'use client';

import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import React, { useState } from "react";
import Router from "next/router";
import { useRouter } from 'next/navigation'
import { RegistrationFormValues } from "./RegistrationFormValues";
import registrationFormInitialValues from "./registrationFormInitialValues";
import registrationFormValidationSchema from "./registrationFormValidationSchema";
import registrationFormModel from "./registrationFormModel";
import { TextFieldInput } from "../TextFieldInput";
import {
  Apartment,
  AccountCircle,
  PhoneAndroidOutlined,
  Mail,
} from "@material-ui/icons";

import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Typography,
  Checkbox,
} from "@mui/material";
import { toast } from "react-toastify";

import { DateFieldInput } from "./DateFieldInput";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/requests/registerUser";

export const RegistrationForm = () => {
  
  const {
    formField: {
      firstName,
      lastName,
      addressLine1,
      Contact_Name,
      phone_urgence,
      phone,
      Email,
      birthDate,
    },
  } = registrationFormModel;
  const [checked, setchecked] = useState(true);
  const delay = (time: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  const registrerUserMutation = useMutation(registerUser, {
    onMutate: (data: any) => {
      toast("en cours d'envoi");
    },
    onSuccess: async (data: any) => {
      if (!data.error) {
        toast.success("Felicitation: Application Soumise ", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        //console.log(process.env.EMAIL_USERNAME)
        ////console.log(`Success with ${data.error}`);
        await delay(4000);

        Router.reload();
      } else {
        console.log(data.error);
        //console.log(process.env.EMAIL_USERNAME);
        toast.error(`${data.error}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        //console.log(`Error with ${data.error}`);
        //console.log("`Error with ${err}`");
      }
    },
    onError: (err) => {
      toast.error("There is an error on the Back End, please contact", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //console.log(`Error with ${err}`);
      //console.log("`Error with ${err}`");
    },
  });

  const handleSubmit = (values: RegistrationFormValues) => {
    registrerUserMutation.mutate(values);
    
  };
  const handleNotif = () => {
    setchecked(!checked);
    console.log(checked);
  };
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
        px={2}
        //mt={2}
        sx={{ backgroundColor: "green" }}>
        <Typography sx={{ fontSize: "25px", font: "Bold", color: "white" }}>
          {" "}
          {"Formulaire d'inscription Pour BK Invest "}{" "}
        </Typography>
      </Stack>

      <Formik
        initialValues={registrationFormInitialValues}
        validationSchema={registrationFormValidationSchema}
        onSubmit={handleSubmit}>
        <Form>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
            px={2}
            mt={2}>
            <TextFieldInput
              name={firstName.name}
              label={firstName.label}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldInput
              name={lastName.name}
              label={lastName.label}
              fullWidth
              mt={1}
              px={2}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldInput
              name={addressLine1.name}
              label={addressLine1.label}
              fullWidth
              mt={1}
              px={2}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Apartment />
                  </InputAdornment>
                ),
              }}
            />
            <DateFieldInput
              name={birthDate.name}
              label={birthDate.label}
              sx={{ width: "100%" }}
            />
            <ErrorMessage
              name="birthDate"
              render={(msg: any) => {
                toast.error(`${msg}`, {
                  position: "bottom-right",
                  autoClose: 3000,
                });
                return (
                  <Typography sx={{ color: "red" }}>
                    {" "}
                    La date de Naissance est Obligatoire{" "}
                  </Typography>
                );
              }}
            />

            <TextFieldInput
              name={phone.name}
              label={phone.label}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldInput
              name={Email.name}
              label={Email.label}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                ),
              }}
            />
           
           <Stack
        //mt={2}
        sx={{ backgroundColor: "green" }}>
        <Typography sx={{ fontSize: "25px", font: "Bold", color: "white" }}>
          {" "}
          {"Contact D`urgence "}{" "}
        </Typography>
      </Stack>
            <Typography sx={{ fontSize: "25px", font: "Bold" }}  >
              Contact D`urgence 
            </Typography>

            <TextFieldInput
              name={Contact_Name.name}
              label={Contact_Name.label}
              fullWidth
              mt={1}
              px={2}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldInput
              name={phone_urgence.name}
              label={phone_urgence.label}
              fullWidth
              mt={1}
              px={2}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidOutlined />
                  </InputAdornment>
                ),
              }}
            />

            <Box position="relative" width="100%">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={registrerUserMutation.isLoading}>
                Appliquer
              </Button>
              {registrerUserMutation.isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-8px",
                    marginLeft: "-8px",
                  }}
                />
              )}
            </Box>
          </Stack>
        </Form>
      </Formik>
    </>
  );
};
