// Commands
import generateToken from "../util/generateToken";

// Resolvers
import signup from "../resolvers/signup";

// Types
import {MutationSignupArgs} from "./types";

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
    Mutation: {
        signup: (root: any, input: MutationSignupArgs, context: any) => signup(input),
    },
    SignupResult: {
        status: (root: any) => !!root,
        token: (root: any) => generateToken(root),
    },
};

export default resolvers;