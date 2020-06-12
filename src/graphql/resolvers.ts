// Commands
import generateToken from "../util/generateToken";

// Resolvers
import signup from "../resolvers/signup";
import login from "../resolvers/login";

// Types
import {MutationLoginArgs, MutationSignupArgs, MutationUpdateUserArgs} from "./types";
import getUserFromToken from "../commands/getUserFromToken";
import deleteUser from "../resolvers/deleteUser";
import updateUser from "../resolvers/updateUser";

const resolvers = {
    Query: {
        getUser: (root: any, input: any, context: any) => getUserFromToken(context),
    },
    Mutation: {
        signup: (root: any, input: MutationSignupArgs) => signup(input),
        login: (root: any, input: MutationLoginArgs) => login(input),
        deleteUser: (root: any, input: any, context: any) => deleteUser(context),
        updateUser: (root: any, input: MutationUpdateUserArgs, context: any) => updateUser(input, context),
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
        status: (root: any) => root,
    },
    UpdateResult: {
        status: (root: any) => root,
    },
};

export default resolvers;