const { GraphQLObjectType } = require('graphql');
const mongoose = require('mongoose');
const UserType = require('./user_type');

require('../models/User');
const User = mongoose.model('User');

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
          console.log(data);
          return data.applications;
        });
        return userData;
      },
    },
  },
});

module.exports = RootQuery;
