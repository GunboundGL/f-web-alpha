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
}