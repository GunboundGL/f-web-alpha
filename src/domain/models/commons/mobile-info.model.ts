import { config } from '@/config';
import { COLLECTION_COMMON } from '@/shared/enum';
import { createModelMongo } from 'gunbound-typescript-sdk';
import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const connectionUri = config.get<string>('mongoose.commons.uri');


const schema = new Schema({
    slug: {
        type: String,
        default: uuid,
    },
    alias: String,
    id: Number,
    name: String,
    description: String,
    y: Number,
    group: Number,
    package: Boolean,
    advertise: String,
    disabled: Boolean,
    stat: {
        attack: Number,
        defense: Number,
        time: Number,
        escape: Number
    },
    prevY: Number,
    position: Number
}, {
    timestamps: true,
});

export const MobileInfoModel = createModelMongo(connectionUri, COLLECTION_COMMON.MOBILE_INFO, schema);