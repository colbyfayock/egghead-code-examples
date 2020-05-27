const path = require('path');

const routes = require('./src/lib/routes');

const createPostError = 'Could not create post pages';

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/post.js`);

  const { data, errors } = await graphql(`
    query {
      takeshape {
        getPostList {
          items {
            _id
            title
          }
        }
      }
    }
  `);


  if (errors) throw errors;

  const posts = data.takeshape.getPostList && data.takeshape.getPostList.items;

  if ( !Array.isArray(posts) ) {
    throw new Error(`${createPostError}: Invalid posts`);
  }

  posts.forEach(({ _id, title }) => {
    createPage({
      path: routes.post(title),
      component: postTemplate,
      context: {
        postId: _id
      }
    });
  });
};