module.exports = function (mongoose) {
  let modelName = "user_applicant";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
    resume_file: {
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
