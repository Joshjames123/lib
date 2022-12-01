module.exports = function (mongoose) {
  let modelName = "Project";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
    projectName: {
      type: Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: Types.String,
      required: true,
    },
    location: {
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
