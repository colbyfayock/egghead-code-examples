import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { tsImageUrl } from 'lib/takeshape';
import { friendlyDate } from 'lib/datetime';
import routes from 'lib/routes';

import Layout from 'components/Layout';
import Trapdoor from 'components/Trapdoor';

const IndexPage = ({ data = {} }) => {
  const page = data?.takeshape?.getHomepage || {};
  const { trapdoor } = page;

  const heroStyles = {
    backgroundImage: `url('${ tsImageUrl(page.hero.image) }')`
  }
  const heroLinkIsExternal = page.hero.button.url.charAt(0) === '/';

  return (
    <Layout pageName="home">
      <Helmet>
        <title>{ page.title }</title>
      </Helmet>

      <div className="hero hero--text" style={heroStyles}>
        <div className="container">
          <div className="hero__content">
            <h1>{ page.hero.heading }</h1>
            <p>{ page.hero.text }</p>
            {heroLinkIsExternal && (
              <Link to={ page.hero.button.url } className="button">{ page.hero.button.text }</Link>
            )}
            {!heroLinkIsExternal && (
              <a href={ page.hero.button.url } className="button">{ page.hero.button.text }</a>
            )}
          </div>
        </div>
      </div>

      <div className="content-block">
        <div className="container">
          <div>
            <h2>{ page.introduction.heading }</h2>
            <p>{ page.introduction.text }</p>
          </div>

          <div>
            <img src={ tsImageUrl(page.introduction.image)  } alt="intro" />
          </div>
        </div>
      </div>

      <div className="stat-bar">
        <div className="container">
          <ul>
            { page.statBar.map((stat, i) => {
              return (
                <li key={`StatBar-${i}`}>
                  <h1>{ stat.value }</h1>
                  <p>{ stat.label }</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="thumb-list thumb-list--three">
        <div className="container">
          <h2 className="heading">Featured Posts</h2>

          <ul>
            { page.featuredPosts.map((post, i) => {
              return (
                <li key={`FeaturedPosts-${i}`}>
                  <Link to={ routes.post(post.title) } className="tout">
                    <div>
                      <img src={ tsImageUrl(post.featureImage) } alt="" />
                    </div>

                    <div className="tout__content">
                      <h4>{ post.title }</h4>
                      <p>
                        <time dateTime={post._enabledAt}>{ friendlyDate(post._enabledAt) }</time>
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="button-container">
            <Link to="/blog" className="button">View all posts</Link>
          </div>
        </div>
      </div>

      <Trapdoor {...trapdoor} />

    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    takeshape {
      getHomepage {
        title
        hero {
          image {
            path
          }
          heading
          text
          button {
            text
            url
          }
        }
        introduction {
          image {
            path
          }
          heading
          text
        }
        statBar {
          value
          label
        }
        featuredPosts {
          title
          featureImage {
            path
          }
          author {
            name
          }
          _enabledAt
        }
        trapdoor {
          heading
          text
          button {
            text
            url
          }
        }
      }
    }
  }
`;