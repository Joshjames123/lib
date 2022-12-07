let projectSchema = require("project.model.js");
let userBaseSchema = require("userBase.model.js");
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
  }

  async init() {
    await this.app.register({
      plugin: RestHapi,
      options: {
        mongoose,
        appTitle: this.title,
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
};

// Usage
const server = new Triseed();
server.init();

server.getProjectSchema();

server.userBaseSchema();
