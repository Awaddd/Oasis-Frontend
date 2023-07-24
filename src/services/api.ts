import { GraphQLClient } from "graphql-request"
import PocketBase from "pocketbase"

export const api = "https://oasis-backend-o9zvx.ondigitalocean.app"
export const client = new GraphQLClient("https://oasis-backend-o9zvx.ondigitalocean.app/graphql")

export const pb = new PocketBase("http://127.0.0.1:8090")
