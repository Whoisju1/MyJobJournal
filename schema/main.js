const {
  GraphQLSchema,
} = require('graphql');

const RootQuery = require('./root_query');

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
