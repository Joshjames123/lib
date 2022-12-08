let bcrypt = require("bcrypt");
module.exports = function (mongoose) {
  let modelName = "user";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema(
    {
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
      userRoll: {
        type: Types.String,
        required: true,
        enum: ["Applicant", "Client", "Admin"],
      },
    },
    { collection: modelName }
  );

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      create: {
        pre: function (payload, request, Log) {
          let hashedPassword = mongoose
            .model("user")
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
