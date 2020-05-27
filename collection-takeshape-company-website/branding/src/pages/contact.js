import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';

const ContactPage = ({ data }) => {
  const page = data?.takeshape?.getContact || {};
  return (
    <Layout>
      <Helmet>
        <title>{ page.title }</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <h1>Contact Us</h1>

          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="message" id="" cols="30" rows="10"></textarea>

            <button type="submit" className="button">Send</button>
          </form>
        </div>
      </header>
    </Layout>
  );
}

export default ContactPage

export const pageQuery = graphql`
  query {
    takeshape {
      getContact {
        title
      }
    }
  }
`;