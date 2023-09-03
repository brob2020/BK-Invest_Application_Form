const registrationFormModel = {
  formId: "registrationForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "Prenom",
      requiredErrorMsg: "Le prenom est obligatoire",
    },
    lastName: {
      name: "lastName",
      label: "Nom",
      requiredErrorMsg: "Le nom est obligatoire",
    },
    addressLine1: {
      name: "addressLine1",
      label: "Address",
      requiredErrorMsg: "L'addresse  est obligatoire",
    },
    Email: {
      name: "Email",
      label: "Email",
      requiredErrorMsg: "L'Email  est obligatoire",
    },
    Contact_Name: {
      name: "Contact_Name",
      label: "Nom Contact",
      requiredErrorMsg: "Le Contact D'urgence  est obligatoire",
    },
    phone_urgence: {
      name: "phone_urgence",
      label: "Numero Tel Urgence ",
      requiredErrorMsg: "Le numero de telephone du Contact D'urgence  est obligatoire",
    },
    phone: {
      name: "phone",
      label: "Numero de telephone",
      requiredErrorMsg: "Le numero de telephone est obligatoire",
    },

    birthDate: {
      name: "birthDate",
      label: "Date de naissance",
      requiredErrorMsg: "La date de naissance est obligatoire",
    }
  },
};

export default registrationFormModel;
