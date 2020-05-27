import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata () {
  const query = graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          authorName
          companyName
          companyUrl
        }
      }
    }
  `;

  const site = useStaticQuery(query) || {};

  return site?.site?.siteMetadata;
}