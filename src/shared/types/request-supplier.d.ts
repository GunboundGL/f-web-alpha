export type GetSupplierIamRequest = {
    username: string;
}

export type SignupSupplierIamRequest = {
    username: string;
    password: string;
    userId?: string;
}

export type CreateSupplierUserRequest = {
    username: string;
    rank: number;
    gold: number;
    cash: number;
    gp: number;
    gender: string;
}

export type SigninSupplierIamRequest = {
    username: string;
    password: string;
}

export type GetByWhereSupplierIamRequest = {
    where: {
        username?: string;
        slug?: string;
        _id?: string;
    }
}

export type CreateDefaultSupplierAvatarEquippedRequest = {
    userSlug: string;
    gender: string;
}

export type UpdateByWhereSupplierUserRequest = {
    where: {
        username?: string;
        slug?: string;
        _id?: string;
    },
    data: {
        rank?: number;
        gold?: number;
        cash?: number;
        gp?: number;
        username?: string;
        isNew?: boolean;
    };
}