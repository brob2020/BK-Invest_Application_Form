import * as yup from "yup";

const registrationFormValidationSchema = yup.object().shape({
  firstName: yup.string().required("Le prenom est obligatoire"),
  lastName: yup.string().required("Le nom est obligatoire"),
  addressLine1: yup.string().required("L'addresse  est obligatoire"),
  Email: yup.string().required("L'Email est obligatoire"),
  Contact_Name: yup.string().required("Le Contact D'urgence   est obligatoire "),
  phone: yup.string().required("Le numero de telephone est obligatoire"),
  phone_urgence: yup.string().required("Le numero de telephone du Contact D'urgence  est obligatoire"),
  birthDate: yup.string().required("La date de naissance est obligatoire")
});

export default registrationFormValidationSchema;
