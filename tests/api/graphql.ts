import axios from "axios";
import gql from "graphql-tag";
import { DocumentNode, print } from "graphql";

export const queries = {
  games: gql`
    query games {
      games {
        id
        name
        slug
        supplier {
          id
          name
        }
      }
    }
  `,

  suppliers: gql`
    query supplier {
      suppliers {
        id
        name
  }
}
  `,

  gameBySlug: gql`
   query slug($slug: String!) {
    gameBySlug(slug: $slug) {
      id
      name
}
}
  `,
};

export const mutations = {
  addGame: gql`
    mutation addGame($input: GameInput!) {
      addGame(input: $input) {
        id
        name
        slug
        supplier {
          id
          name
        }
      }
    }
  `,
};

export const executeQuery = async (query: DocumentNode, variables?: object) => {
  const res = await axios.post(process.env.API_URL as string, {
    query: print(query),
    variables,
  });

  return res.data.data;
};

interface Supplier {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  supplier: Supplier;
}
