module.exports = function (mongoose) {
  let modelName = "user_client";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
    companyModel: {
      type: Types.String,
      required: true,
    },
  });

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {},
  };

  return Schema;
};
