import { GraphQLClient } from "graphql-request";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "../../config";

export const api = "https://oasis-backend-o9zvx.ondigitalocean.app";
export const client = new GraphQLClient(
  "https://oasis-backend-o9zvx.ondigitalocean.app/graphql"
);

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
