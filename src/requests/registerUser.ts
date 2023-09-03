import { RegistrationFormValues } from "../Components/form/RegistrationFormValues";

const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export const registerUser = async (payload: RegistrationFormValues) => {
  //await delay(3000);
  
  const bodyContent = JSON.stringify(payload);
  //console.log("bodyContent")
  const response = await fetch("/api/register", {
    method: "POST",
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
  });
  ////console.log(bodyContent)
  const data = await response.json();
  //console.log( `displaying the response front end ${data}`)
  return data;
};
