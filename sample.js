let Triseed = require("./triseed");

const server = new Triseed();
server.init();

//server.getUserBaseSchema();

server.users.find().then((users) => console.log(users));
