const { number } = require("joi");
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Buis_Number : {
    type: String,
  },
  Fullname: {
    type: String,
  },
  Message: {
    type: String,
  },
  Email: {
    type: String,
  },
  LastUpdate: {
    type: Date,
  },
  DateMaturite: {
    type: Date,
  },

  Montant:{
    type:Number,
  },
  Date: {
    type: Date,
  },

  
});

module.exports =
  mongoose.models.transaction || mongoose.model("transaction", dataSchema);
