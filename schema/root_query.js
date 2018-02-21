const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = require('graphql');
const mongoose = require('mongoose');
const UserType = require('./user_type');
const ApplicationType = require('./application_type');

require('../models/User');
require('../models/Application');

const User = mongoose.model('User');
const Application = mongoose.model('Application');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      name: 'user',
      type: UserType,
      resolve: async (parentValue, args, rootValue) => {
        const { _id: currentUserID } = rootValue.user;
        const userData = await User.findOne({ _id: currentUserID }).populate('applications').exec((err, data) => {
          if (err) return console.log('Error: ', err);
          return data.applications;
        });
        return userData;
      },
    },
    application: {
      name: 'application',
      type: ApplicationType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (root, { id }, { user }) => {
        if (user) {
          try {
            const applicationData = await Application.findOne({ _id: id });
            return applicationData;
          } catch (err) {
            console.log('Error: ', err);
          }
        }
      },
    },
  },
});

module.exports = RootQuery;
