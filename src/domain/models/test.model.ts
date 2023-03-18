import { config } from '@/config';
import { COLLECTION } from '@/shared/enum';
import { createModelMongo } from 'gunbound-typescript-sdk';
import { Schema } from 'mongoose';


const connectionUri = config.get<string>('mongoose.test.uri');

const schema = new Schema({
    name: String,
}, {
    timestamps: true,
});

export const TestModel = createModelMongo(connectionUri, COLLECTION.TEST, schema);