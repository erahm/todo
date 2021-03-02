const todoMapper = require("./helpers/todoMapper.js");

const baseUrl = process.env.FIREBASE_DB_URL;

const resolvers = {
  Query: {
    todos: async (userId) => {
      // we would pass a userId to firebase and grab the todos associated with that
      const data = await fetch(`${baseUrl}/todos.json`);
      const dataJson = await data.json();
      return todoMapper(dataJson);
    }
  }
}