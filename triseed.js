let projectSchema = require("./models/project.model");
let userBaseSchema = require("./models/userBase.model");
let Hapi = require("@hapi/hapi");
let mongoose = require("mongoose");
let RestHapi = require("rest-hapi");

// Sample Library
class Triseed {
  app;
  title = "Triseed API";

  constructor(config) {
    this.app = Hapi.Server({ port: config?.port || 8080 });
    this.title = config?.title || "Triseed API";
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
    return projectSchema;
  }
  getUserBaseSchema() {
    return userBaseSchema;
  }
}

// Usage
const server = new Triseed();
server.init();

// server.getProjectSchema();

// server.getUserBaseSchema();
