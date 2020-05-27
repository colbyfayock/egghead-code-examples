import React from 'react';

import { useSiteMetadata } from 'hooks';

import Container from 'components/Container';

const Footer = () => {
  const { authorName, authorUrl } = useSiteMetadata();
  return (
    <footer className="page-footer">
      <Container>
        <small>&copy; {new Date().getFullYear()} <a href={authorUrl} rel="nofollow">{ authorName }</a></small>
      </Container>
    </footer>
  );
};

export default Footer;