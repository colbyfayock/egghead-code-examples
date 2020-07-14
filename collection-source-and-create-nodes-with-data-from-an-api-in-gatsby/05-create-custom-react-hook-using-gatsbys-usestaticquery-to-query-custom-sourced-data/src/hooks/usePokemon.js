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
        }
      }
    }
  `);

  const pokemon = data.allPokemon.nodes.map(node => {
    const { name, types, id } = node;
    return {
      name,
      id,
      types: types.map(type => type.type.name)
    }
  });

  return {
    pokemon
  }

}