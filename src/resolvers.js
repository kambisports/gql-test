export const resolvers = {
    Query: {
        testQuery: async (parent, args, context) => {
            return args.testString;
        }
    }
}