import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = "soultrack"; // you can change this

export async function connectToDatabase() {
  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  const db = client.db(dbName);
  return { db, client };
}
