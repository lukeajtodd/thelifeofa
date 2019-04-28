module.exports = function(api) {
  api.loadSource(store => {
    const posts = store.getContentType('Post');

    posts.addSchemaField('category', ({ graphql }) => ({
      type: graphql.GraphQLString,
      resolve(node, _) {
        return node.fields.category;
      }
    }));
  });
};
