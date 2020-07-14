import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'components/Layout';
import Container from 'components/Container';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPokemon {
        nodes {
          id
          name
          types {
            type {
              name
            }
          }
        }
      }
    }
  `);

  const allPokemon = data.allPokemon.nodes.map(node => {
    const { name, types, id } = node;
    return {
      name,
      id,
      types: types.map(type => type.type.name)
    }
  });

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Pokédex</title>
      </Helmet>
      <Container>
        <ul>
          {allPokemon.map((pokemon, index) => {
            return (
              <li key={pokemon.id}>
                <h3>{ index + 1 }: { pokemon.name }</h3>
                <p>{ pokemon.types.join(', ') }</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  );
};

export default IndexPage;
