
"use strict";

import InsertData from "@/modele/insertData";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import Joi from "joi";
import nodemailer from "nodemailer";
dbConnect();

function sendValidation(data: any) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    Buis_Number: Joi.string().allow(""),
    lastName: Joi.string().allow(""),
    phone_urgence: Joi.string().required(),
    Contact_Name: Joi.string().required(),
    addressLine1: Joi.string().required(),
    phone: Joi.string().allow(""),
    Status: Joi.string().allow(""),
    Notification: Joi.boolean().required(),
    Email: Joi.string().required(),
    birthDate: Joi.date().required(),
    LastUpdate: Joi.date().allow("")
  });
  return schema.validate(data);
}

function calculateFullAge(dateParam:any) {
  const birthDate = new Date(dateParam);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  const { firstName, birthDate, lastName, Buis_Number, Email,  Phone ,Notification} = req.body;

  if (method === "POST") {
    const { error } = sendValidation(body);
    console.log(error);
    ////
    if (error)
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    try {
      const file = new InsertData(body);
      
      file.LastUpdate = file.Date;
      
      const newFile = await file.save();
     

      ////console.log(file);
      res.status(200).json({ success: true, data: newFile });
      
      //setup the transport for the email
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          Email: "login",
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      console.log(body);
      //;Bkinvest23@gmail.com
     const emailRes = await transporter.sendMail({
        from: `Noreply@BKInvest.com;Bkinvest23@gmail.com`,
        to: `nodemailer506@gmail.com`,
        subject: ` Form Application for ${lastName}   ${firstName}`,
        html: `<p> This request was made and is waiting your approval. See the details bellow</p><br>
       <p><strong>  Requested by : </strong> ${lastName}  </p><br>
       <p><strong>   Amount Contribuated  : </strong> ${0} FRCFA </p><br>
       <p><strong> User  Phone Number: </strong> ${Phone} </p><br>
       <p><strong> Email Address: </strong> ${Email} </p><br>
       <p><strong> Made On  : </strong> ${Date} </p><br>
       <p><strong> please remember to update when done with it. Thanks </p><br>
       `,
      });
      
      console.log("message send ");
    } catch (e) {
      console.log(e);
      res.status(400).json({ success: false });
      console.log(e)
    }
  }
}
