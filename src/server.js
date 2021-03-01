const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const firebase = require("firebase");
const typeDefs = require("./api/typedefs");
const resolvers = require("./api/resolvers");
require("dotenv").config();

let web = express();
let app = express();

const webPort = process.env.WEB_PORT || 3000;
const apiPort = process.env.API_PORT || 4000;
const baseUrl = process.env.BASE_URL || "http://localhost";

const firebaseClient = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      headers: req.headers,
      firebaseClient
    };
  }
});

server.applyMiddleware({ app });

app.listen({ port: apiPort }, () => {
  console.log(`API has started ${baseUrl}:${apiPort}/graphql`);
})

web.use(express.static("dist"));
web.listen({ port: webPort }, () => {
  console.log(`Web has started ${baseUrl}:${webPort}`);
})