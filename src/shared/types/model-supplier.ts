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
}