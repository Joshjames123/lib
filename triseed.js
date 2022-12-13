let UserApplicantSchema = require("./models/userApplicant.model");
let UserClientSchema = require("./models/userClient.model");
let ProjectSchema = require("./models/project.model");
let UserSchema = require("./models/userBase.model");
let Hapi = require("@hapi/hapi");
let mongoose = require("mongoose");
let RestHapi = require("rest-hapi");

// Sample Library
module.exports = class Triseed {
  app;
  title = "Triseed API";

  constructor(config) {
    this.app = Hapi.Server({ port: config?.port || 8080 });
    this.title = config?.title || "Triseed API";
    mongoose.model("userApplicant", UserApplicantSchema(mongoose));
  }

  async init() {
    await this.app.register({
      plugin: RestHapi,
      options: {
        mongoose,
        config: {
          appTitle: this.title,
        },
      },
    });

    await this.app.start();
    console.log("Server ready", this.app.info);
  }
  getProjectSchema() {
    return ProjectSchema;
  }
  getUserApplicantSchema() {
    return UserApplicantSchema;
  }
  getUserClientSchema() {
    return UserClientSchema;
  }
  get users() {
    return mongoose.model("userApplicant");
  }
};

// Usage
// const server = new Triseed();
// server.init();

//server.getProjectSchema();

//server.getUserBaseSchema();
