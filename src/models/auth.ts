import { APIResponse } from '@/api';

type UserType = 'student' | 'organization';

export type User = {
    id: string;
    username: string;
    name: string;
    email: string;
    phoneNumber?: string;
    password: string;
    userType: UserType;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
};

export type LoginUserParams = {
    email: string;
    password: string;
};

export type LoginUserResponse = APIResponse<User>;

export type CreateUserParams = {
    username: string;
    name: string;
    email: string;
    password: string;
    userType: UserType;
};
