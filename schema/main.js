const {
  GraphQLSchema,
} = require('graphql');

const RootQuery = require('./root_query');
const mutations = require('./mutations');

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});

module.exports = schema;
