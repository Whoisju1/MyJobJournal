const { GraphQLObjectType, GraphQLID } = require('graphql');
const Application = require('mongoose').model('Application');
const ApplicationType = require('./application_type');

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    ToggleFavorite: {
      type: ApplicationType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (root, { id }) => {
        const application = await Application.findById(id);
        const { favorite } = application;
        application.favorite = !favorite;

        return application.save((err, data) => {
          if (err) return console.log('Error: ', err);
          return data;
        });
      },
    },
  },
});

module.exports = mutations;
