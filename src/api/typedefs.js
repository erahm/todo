const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int
    email: String!
  }
  type Todo {
    id: Int
    task: String
  }
  type Query {
    user: User
    todos: [Todo]
  }
`;

module.exports = typeDefs;