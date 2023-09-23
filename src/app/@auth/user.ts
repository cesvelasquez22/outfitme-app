export interface User {
    id: number;
    email: string;
    fullName: string;
    token: string;
}

export interface UserDto {
    email: string;
    fullName?: string;
    password: string;
}