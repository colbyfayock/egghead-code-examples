import React from 'react';
import { Helmet } from 'react-helmet';

import usePokemon from 'hooks/usePokemon';

import Layout from 'components/Layout';
import Container from 'components/Container';

const IndexPage = () => {

  const { pokemon: allPokemon } = usePokemon();

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Pokédex</title>
      </Helmet>
      <Container>
        <ul className="pokedex">
          {allPokemon.map((pokemon, index) => {
            return (
              <li key={pokemon.id}>
                <div className="pokemon-image">
                  <img src={pokemon.image} alt={`${pokemon.name} Thumbnail`} />
                </div>
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
