import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { tsImageUrl } from 'lib/takeshape';
import { friendlyDate } from 'lib/datetime';
import routes from 'lib/routes';

import Layout from 'components/Layout';

const AboutPage = ({ data = {} }) => {
  const page = data?.takeshape?.getPostList || {};

  return (
    <Layout pageName="blog">
      <Helmet>
        <title>{ page.title }</title>
      </Helmet>

      <header className="header">
        <h1>Blog</h1>
      </header>

      <div className="post-list">
        <div className="container">
          <ul>
            { page.items.map((post, i) => {
              return (
                <li key={`Post-${i}`}>
                  <Link to={ routes.post(post.title) } className="tout">
                    <div>
                      <img src={ tsImageUrl(post.featureImage) } alt="" />
                    </div>

                    <div className="tout__content">
                      <h3>{ post.title }</h3>
                      <p>
                        <time dateTime={post._enabledAt}>{ friendlyDate(post._enabledAt) }</time>
                      </p>
                      <p>{ post.deck }</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
;}

export default AboutPage

export const pageQuery = graphql`
  query {
    takeshape {
      getPostList(sort: [{field: "_enabledAt", order: "desc"}]) {
        total
        items {
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
  }
`;