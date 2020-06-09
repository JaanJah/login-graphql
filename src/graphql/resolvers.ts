const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
    Mutation: {
        // TODO: Use proper types and add functionality
        signup: (input: any) => {
            return {
                status: true,
                token: null,
            }
        }
    }
};

export default resolvers;