import { client } from '@/services/client';
import { APIResult } from '@/types/response';
import {
    CreateUserParams,
    IdentifyUserParams,
    IdentifyUserResponse,
    LoginUserParams,
    LoginUserResponse,
    LogoutUserResponse,
} from '@/types/user';
import { fromError } from '@/utils/api-errors';

export const createUser = async (
    props: CreateUserParams,
): Promise<APIResult<CreateUserParams>> => {
    try {
        const response = await client.post('/auth/create-user', props);

        return response.data;
    } catch (error) {
        return fromError(error);
    }
};

export const loginUser = async (
    props: LoginUserParams,
): Promise<APIResult<LoginUserResponse>> => {
    try {
        const response = await client.post('/auth/login-user', props);
        return response.data;
    } catch (err) {
        return fromError(err);
    }
};

export const logoutUser = async (): Promise<APIResult<LogoutUserResponse>> => {
    try {
        const res = await client.get('/auth/logout-user');

        return res.data;
    } catch (error) {
        return fromError(error);
    }
};
export const identifyUser = async (
    props: IdentifyUserParams,
): Promise<APIResult<IdentifyUserResponse>> => {
    try {
        const response = await client.post('/auth/identify-user', props);
        return response.data;
    } catch (error) {
        return fromError(error);
    }
};
