import React from 'react';
import { graphql } from 'gatsby';

import { friendlyDate } from 'lib/datetime';

import Layout from 'components/Layout'

const PostTemplate = ({ data }) => {
  const post = data?.takeshape?.getPost || {};
  return (
    <Layout>
      <header className="post-header">
        <div className="container">
          <div className="post-header__content">
            <h2>{ post.title }</h2>
            <p>
              By { post.author.name }
            </p>
            <p>
              <time dateTime={post._enabledAt}>{ friendlyDate(post._enabledAt) }</time>
            </p>
            { post.tags.length > 0 && (
              <p>
                Tags:{` `}
                { post.tags.map((tag, i) => {
                  let string = '';
                  if ( i !== 0 ) string = `${string}, `;
                  return `${string}${tag.name}`;
                })}
              </p>
            ) }
          </div>
        </div>
      </header>

      <div className="content">
        <div className="container" dangerouslySetInnerHTML={{
          __html: post.bodyHtml
        }} />
      </div>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($postId: ID!) {
    takeshape {
      getPost( _id: $postId ) {
        _id
        _contentTypeName
        _enabledAt
        title
        deck
        tags {
          name
        }
        author {
          name
          image {
            path
          }
        }
        featureImage {
          path
        }
        bodyHtml
      }
    }
  }
`
