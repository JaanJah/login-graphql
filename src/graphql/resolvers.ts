// Commands
import generateToken from "../util/generateToken";

// Resolvers
import signup from "../resolvers/signup";
import login from "../resolvers/login";

// Types
import {MutationLoginArgs, MutationSignupArgs} from "./types";
import getUserFromToken from "../commands/getUserFromToken";
import deleteUser from "../resolvers/deleteUser";

const resolvers = {
    Query: {
        getUser: (root: any, input: any, context: any) => getUserFromToken(context),
    },
    Mutation: {
        signup: (root: any, input: MutationSignupArgs) => signup(input),
        login: (root: any, input: MutationLoginArgs) => login(input),
        deleteUser: (root: any, input: any, context: any) => deleteUser(context),
    },
    UserResult: {
        username: (user: any) => user.name,
        email: (user: any) => user.email,
    },
    SignupResult: {
        status: (root: any) => !!root,
    },
    LoginResult: {
        status: (root: any) => !!root,
        token: (root: any) => generateToken(root),
    },
    DeleteResult: {
        status: (root: any) => root
    }
};

export default resolvers;