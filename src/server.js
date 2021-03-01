const express = require("express");
const path = require("path");

let web = express();

const webPort = process.env.WEB_PORT || 3000;

web.use(express.static("dist"));
web.listen({ port: webPort }, () => {
  console.log(`web listening on port ${webPort}`);
})