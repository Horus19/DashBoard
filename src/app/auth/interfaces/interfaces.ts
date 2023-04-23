

export interface AuthResponse {
    ok: boolean;
    id?: string;
    name?: string;
    email?: string;
    token?: string;
    message?: string;
}


export interface Usuario {
    uid: string;
    name: string;
    email: string;
}