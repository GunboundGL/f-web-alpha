import { createConnection, Schema } from "mongoose";

export const createModelMongo = (connectionUri: string, collectionName: string, schema: Schema) => {
    const connection = createConnection(connectionUri);

    return connection.model(collectionName, schema);
}