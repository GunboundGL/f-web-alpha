export type Iam = {
    username: string;
    password: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
}

export type User = {
    _id: string;
    username: string;
    rank: number;
    gold: number;
    cash: number;
    gp: number;
    slug: string;
    isNew: boolean;
}

export type Server = {
    name: string;
    type: number;
    subtype: number;
    playerOnline: number;
    maxPlayer: number;
    rank: {
        up: number;
        down: number;
    };
    typeAvatar: number;
    description: {
        item: string;
        event: string;
    };
    number: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
    slug: string;
    batery: number;
    zone: number;
}