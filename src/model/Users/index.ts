export interface Users {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface UserToken {
    user: Users;
    token: string;
}