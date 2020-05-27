import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>404: Page Not Found</title>
      </Helmet>

      <header className="header">
        <h1>404: Page Not Found</h1>
      </header>
    </Layout>
  );
;}

export default NotFoundPage
