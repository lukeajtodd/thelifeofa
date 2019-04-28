// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  transformers: {
    remark: {}
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: 'blog/:slug'
      }
    }
  ],
  chainWebpack: config => {
    config.module
      .rule('postcss')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(
          ...[
            require('precss'),
            require('rucksack-css'),
            require('postcss-preset-env')()
          ]
        );
        return options;
      });
  }
};
