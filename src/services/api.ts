import { GraphQLClient } from "graphql-request";

const dev = process.env.NODE_ENV !== "production";

export const api = dev ? "http://localhost:1337" : "http://64.227.33.20:1337";
export const client = new GraphQLClient(
  dev ? "http://localhost:1337/graphql" : "http://64.227.33.20:1337/graphql"
);
