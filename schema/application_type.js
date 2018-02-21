const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const ApplicationType = new GraphQLObjectType({
  name: 'applications',
  fields: {
    _id: {
      type: GraphQLID,
    },
    company: {
      type: GraphQLString,
    },
    position: {
      type: GraphQLString,
    },
    companyPhone: {
      type: GraphQLString,
    },
    companyEmail: {
      type: GraphQLString,
    },
    companyLocation: {
      type: GraphQLString,
    },
    companyWebsite: {
      type: GraphQLString,
    },
    companyInfo: {
      type: GraphQLString,
    },
    jobID: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    favorite: {
      type: GraphQLBoolean,
    },
    compensation: {
      type: GraphQLString,
    },
    jobDetails: {
      type: GraphQLString,
    },
    source: {
      type: GraphQLString,
    },
    dateCreated: {
      type: GraphQLString,
    },
    dateApplied: {
      type: GraphQLString,
    },
  },
});

module.exports = ApplicationType;

