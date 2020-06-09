import {loadSchemaSync} from "@graphql-tools/load";
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";
import {addResolversToSchema} from "@graphql-tools/schema";
import resolvers from "../graphql/resolvers";

export default () => {
    // Load schemas synchronously
    const schema = loadSchemaSync('./schemas/*.graphql', {
        loaders: [
            new GraphQLFileLoader()
        ]
    });

    // Add resolvers to schema for ApolloServer config
    return addResolversToSchema({
        schema,
        resolvers,
    });
}