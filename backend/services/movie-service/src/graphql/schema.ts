import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Movie {
        id: ID!
        title: String!
        releaseDate: String!
    }

    type Query {
        movies: [Movie]
    }
`);

export default schema;
