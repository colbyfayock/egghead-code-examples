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
              <li key={pokemon.id} className="pokemon">
                <div className="pokemon-image">
                  <img src={pokemon.image} alt={`${ pokemon.name } Thumbnail`} />
                </div>
                <div className="pokemon-details">
                  <div>
                    <h3>
                      { pokemon.name }
                    </h3>
                    <p>{ pokemon.types.join(', ') }</p>
                  </div>
                  <div>
                    <span className="pokemon-index">{ index + 1 }</span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  );
};

export default IndexPage;
