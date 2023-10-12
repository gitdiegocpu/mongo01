import{ MongoClient } from "mongodb";
import{ connectionString } from "../secrets.js";

const client = new MongoClient (connectionString);

await client.connect();

export const db = client.db('MyFirtsCluster');

export function closeClient() {
    client.close()
}


