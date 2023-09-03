const { number } = require("joi");
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Prenom: {
    type: String,
  },
  Notification: {
    type: Boolean,
  },

  Buis_Number : {
    type: String,
  },
  Nom: {
    type: String,
  },
  Contact_Urgence_tel: {
    type: String,
  },
  Notes: {
    type: String,
  },
  Message: {
    type: String,
  },
  Phone: {
    type: String,
  },
  Contact_Name: {
    type: String,
  },
  Montant:{
    type:Number,
  },
  Email: {
    type: String,
    max: 1024,
  },
  Date: {
    type: Date,
  },
  LastUpdate: {
    type: Date,
  },
  Status:{
    type: String,
    max: 1024,
  }
  
});

module.exports =
  mongoose.models.insertData || mongoose.model("insertData", dataSchema);
