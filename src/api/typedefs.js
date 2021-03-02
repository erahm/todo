const { gql } = require("apollo-server");

const typeDefs = gql`
  type Todo {
    id: Int
    task: String
    userId: Int!
  }
  type Query {
    todos: [Todo]
  }
`;

module.exports = typeDefs;