import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import getSchema from "./util/getSchema";

// Create express app
const app = express();

// Create ApolloServer
const server = new ApolloServer({
    schema: getSchema(),
    context: ({ req}) => {
        // Get token from HTTP header and pass it to context
        return {
            token: req.headers.authorization
        }
    }});

// Add express.js ass middleware for ApolloServer
server.applyMiddleware({ app });

// Start listening express app
app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);