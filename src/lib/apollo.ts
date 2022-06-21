import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o1tpec06ko01z74erlf1sh/master',
    cache: new InMemoryCache()
})