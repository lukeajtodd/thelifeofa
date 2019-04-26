const { setContext } = require('apollo-link-context');
const { HttpLink } = require('apollo-link-http');
const { introspectSchema, makeRemoteExecutableSchema } = require('graphql-tools');
const fetch = require('node-fetch');
const { uri, token } = require('./credentials');

module.exports = function(api) {
  api.createSchema(async function(graphql) {
    const http = new HttpLink({
      uri,
      fetch
    });

    const link = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ''
      }
    })).concat(http);

    const schema = await introspectSchema(link);
    const executableSchema = await makeRemoteExecutableSchema({
      schema,
      link
    });

    return executableSchema;
  });
};