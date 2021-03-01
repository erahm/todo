const userProfile = require("./helpers/userProfile");

const baseUrl = process.env.FIREBASE_DB_URL;

const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch(`${baseUrl}/users.json`);
      const dataJson = await data.json();
      return userProfile(dataJson);
    }
  }
}