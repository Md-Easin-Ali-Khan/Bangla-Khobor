import dns from "node:dns"
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

dns.setServers(['8.8.8.8', '8.8.4.4'])
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("bangla-news");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

  emailAndPassword: {
    enabled: true,
  },
});