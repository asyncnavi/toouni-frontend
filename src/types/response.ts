import { APIErrorResponse } from '@/types/errors';

export interface APIResponse<T = never> {
    status: string;
    statusCode: number;
    data: T;
    request_id: string;
}

export type APIResult<S = APIResponse, E = APIErrorResponse> = {
    data?: S;
    error?: E;
};
