// Commands

// Resolvers

// Types
import {MutationSignupArgs} from "./types";

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
    Mutation: {
        signup: (root: any, input: MutationSignupArgs, context: any) => {
            return {
                status: true,
                token: null,
            }
        }
    }
};

export default resolvers;