const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModelSchema = new Schema({
    userName: { Type: String},
    userEmail: { Type: String},
    userPswd: { Type: String}
  });
    // Export function to create "userModel" model class in the database
  const UsersModel = mongoose.model("userCollection", userModelSchema);

  module.exports = UsersModel;