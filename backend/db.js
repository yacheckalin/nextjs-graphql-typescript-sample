import { MongoClient } from "mongodb";

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const MONGO_DB_NAME = process.env.MONGO_INITDB_DATABASE;

if (!MONGO_DB_URL) {
  throw new Error("Define the MONGO_DB_URL environmental variable");
}

if (!MONGO_DB_NAME) {
  throw new Error("Define the MONGO_INITDB_DATABASE environmental variable");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // connect to client
  let client = new MongoClient(MONGO_DB_URL);
  await client.connect();

  let db = client.db(MONGO_DB_NAME);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
