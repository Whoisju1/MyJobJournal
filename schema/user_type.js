const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = require('graphql');

const ApplicationType = require('./application_type');

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: {
    _id: {
      type: GraphQLID,
    },
    firstName: {
      type: GraphQLString,
    },
    LastName: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    numOfApplications: {
      type: GraphQLInt,
    },
    applications: {
      type: GraphQLList(ApplicationType),
    },
  },
});

module.exports = UserType;
