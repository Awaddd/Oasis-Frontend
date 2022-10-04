import { GraphQLClient } from "graphql-request"
import { createClient } from "@supabase/supabase-js"

export const api = "https://oasis-backend-o9zvx.ondigitalocean.app"
export const client = new GraphQLClient("https://oasis-backend-o9zvx.ondigitalocean.app/graphql")

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_CLIENT as string
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
