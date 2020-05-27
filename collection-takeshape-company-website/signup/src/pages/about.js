import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { tsImageUrl } from 'lib/takeshape';

import Layout from 'components/Layout';
import Trapdoor from 'components/Trapdoor';

const AboutPage = ({ data = {} }) => {
  const page = data?.takeshape?.getAbout || {};
  const trapdoor = data?.takeshape?.getTrapdoor || {};

  const heroStyles = {
    backgroundImage: `url('${ tsImageUrl(page.hero.image) }')`
  }

  return (
    <Layout pageName="about">
      <Helmet>
        <title>{ page.title }</title>
      </Helmet>

      <div className="hero hero--text" style={heroStyles}>
        <div className="container">
          <div className="hero__content">
            <h1>{ page.hero.heading }</h1>
            <p>{ page.hero.text }</p>
          </div>
        </div>
      </div>

      <div className="fact-bar">
        <div className="container">
          <ul>
            { page.factBar.map((fact, i) => {
              return (
                <li key={`FactBar-${i}`}>
                  <img src={ tsImageUrl(fact.image) } alt="" />
                  <h4>{ fact.heading }</h4>
                  <p>{ fact.text }</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="container" dangerouslySetInnerHTML={{
          __html: page.bodyHtml
        }} />
      </div>

      <div className="team">
        <div className="container">
          <ul>
            { page.team.map((member, i) => {
              return (
                <li key={`Team-${i}`}>
                  <img src={ tsImageUrl(member.image) } alt="" />
                  <h4>{ member.name }</h4>
                  <p>{ member.biography }</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Trapdoor {...trapdoor} />
    </Layout>
  );
;}

export default AboutPage

export const pageQuery = graphql`
  query {
    takeshape {
      getAbout {
        title
        hero {
          image {
            path
          }
          heading
          text
        }
        factBar {
          image {
            path
          }
          heading
          text
        }
        bodyHtml
        team {
          image {
            path
          }
          name
          biography
        }
      }
      getTrapdoor {
        heading
        text
        button {
          text
          url
        }
      }
    }
  }
`;