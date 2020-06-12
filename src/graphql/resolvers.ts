// Commands
import generateToken from "../util/generateToken";

// Resolvers
import signup from "../resolvers/signup";
import login from "../resolvers/login";

// Types
import {MutationLoginArgs, MutationSignupArgs} from "./types";

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
    Mutation: {
        signup: (root: any, input: MutationSignupArgs, context: any) => signup(input),
        login: (root: any, input: MutationLoginArgs, context: any) => login(input),
    },
    SignupResult: {
        status: (root: any) => !!root,
    },
    LoginResult: {
        status: (root: any) => !!root,
        token: (root: any) => generateToken(root),
    }
};

export default resolvers;