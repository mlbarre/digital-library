const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
      bookId: String
      authors: [""]
      description: String
      title: String
      image: Float
      link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: { 
        [authors],
        description: String!, 
        title: String!, 
        bookId: String!, 
        image: String!, 
        link: String! 
    }): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;