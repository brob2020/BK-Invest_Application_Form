const { number } = require("joi");
const mongoose = require("mongoose");

const venteDone = new mongoose.Schema({
  Ville: {
    type: String,
  },
  Notification: {
    type: Boolean,
  },

  Entrer_Num : {
    type: String,
  },
  Nom: {
    type: String,
  },
 
 
  Notes: {
    type: String,
  },
  QTY:{
    type:Number,
  },
  Email: {
    type: String,
    max: 1024,
  },
  Date: {
    type: Date,
  },
  Status:{
    type: String,
    max: 1024,
  }
});

module.exports =
  mongoose.models.vente || mongoose.model("insertData", venteDone);
