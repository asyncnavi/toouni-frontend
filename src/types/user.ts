export type UserType = 'student' | 'organization';

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
    identifier: string; // identifier can be username or email
    password: string;
};
export type LoginUserResponse = {
    user: User;
    token: string;
};

export type CreateUserResponse = LoginUserResponse;

export type CreateUserParams = {
    username: string;
    name: string;
    email: string;
    password: string;
    user_type: UserType;
};

export type GetUserResponse = {
    user: User;
};

export type IdentifyUserParams = {
    identifier: string;
};

export type IdentifyUserResponse = {
    user_exists: boolean;
    identifier: string;
};

export type LogoutUserResponse = {
    message: string;
};
