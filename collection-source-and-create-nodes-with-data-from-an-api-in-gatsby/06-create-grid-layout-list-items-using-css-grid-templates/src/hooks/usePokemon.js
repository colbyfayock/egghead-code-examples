import { useStaticQuery, graphql } from 'gatsby';

export default function usePokemon() {
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
          sprites {
            front_default
          }
        }
      }
    }
  `);

  const pokemon = data.allPokemon.nodes.map(node => {
    const { name, types, id, sprites } = node;
    return {
      name,
      id,
      types: types.map(type => type.type.name),
      image: sprites.front_default
    }
  });

  return {
    pokemon
  }

}