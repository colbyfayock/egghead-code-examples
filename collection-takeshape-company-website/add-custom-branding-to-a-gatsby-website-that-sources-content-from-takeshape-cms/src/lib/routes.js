const slugify = require("slugify");

/**
 * post
 * @description Given the title, creates a post path
 */

exports.post = function(title) {
  const slug = slugify(title.toLowerCase());
  return `/blog/${slug}/`;
};