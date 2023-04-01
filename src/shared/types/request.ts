export type RegisterRequest = {
    name: string;
    password: string;
    gender: string;
}

export type LoginRequest = {
    u: string;
    p: string;
    r: number;
}