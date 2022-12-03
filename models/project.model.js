module.exports = function (mongoose) {
  let modelName = "project";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema(
    {
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
      requirements: {
        location: { type: Types.String },
        experience: { type: Types.String },
        collegeGraduate: { type: Types.Boolean },
        etc: { type: Types.String },
      },
      budget: {
        min: { type: Types.Number, exclude: true },
        max: { type: Types.Number, exclude: true },
      },
    },
    { collection: modelName }
  );

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      associations: {
        projects: {
          type: "MANY_MANY",
          alias: "project",
          model: "project",
          linkingModel: "project_project",
          embedAssociation: false,
        },
      },
    },
  };

  return Schema;
};
