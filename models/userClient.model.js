let bcrypt = require("bcrypt");
module.exports = function (mongoose) {
  let modelName = "userClient";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
    userName: {
      type: Types.String,
      required: true,
      unique: true,
    },
    email: {
      type: Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Types.String,
      required: true,
      exclude: false,
      allowOnUpdate: false,
    },
    firstName: {
      type: Types.String,
      required: true,
    },
    lastName: {
      type: Types.String,
      required: true,
    },
    address: {
      type: Types.String,
      required: true,
    },
    companyName: {
      type: Types.String,
      required: true,
    },
    companyDescription: {
      type: Types.String,
      required: true,
    },
    companyAddress: {
      type: Types.String,
      required: true,
    },
    companyPhoneNumber: {
      type: Types.Number,
      required: true,
    },
  });

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      create: {
        pre: function (payload, request, Log) {
          let hashedPassword = mongoose
            .model("userClient")
            .generatePasswordHash(payload.password);
          payload.password = hashedPassword;
          return payload;
        },
      },
    },
    generatePasswordHash: function (password) {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);
      return hash;
    },
  };

  return Schema;
};
