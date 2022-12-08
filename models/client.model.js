module.exports = function (mongoose) {
  let modelName = "user_client";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
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
    routeOptions: {},
  };

  return Schema;
};
