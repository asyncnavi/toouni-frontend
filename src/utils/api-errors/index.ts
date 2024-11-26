import { AxiosError } from 'axios';

import { APIErrorResponse } from '@/types/errors';
import { APIResult } from '@/types/response';

import { ERROR_CODES } from './codes';

export function withError(error: APIErrorResponse): APIResult<never> {
    return { error };
}

export function withUnknownError(message?: string): APIResult<never> {
    return {
        error: {
            status: 'error',
            status_code: 500,
            error: {
                error_code: ERROR_CODES.UNKNOWN,
                message: message ?? 'Something went wrong!',
                details: [],
                timestamp: new Date().toISOString(),
                path: '',
            },
            request_id: 'unknown',
        },
    };
}

/**
 * Converts any error into a structured Result with proper error details.
 */
export function fromError(e: Error | unknown): APIResult<never> {
    if (e instanceof AxiosError) {
        if (e.response && e.response.status < 500) {
            return withError({
                status: 'error',
                status_code: e.response.data.status_code,
                error: e.response.data.error,
                request_id: e.response.data.request_id || 'unknown',
            });
        }
        if (e.response) {
            return withError({
                status: 'error',
                status_code: e.response.status,
                error: {
                    error_code: 'INTERNAL_SERVER_ERROR',
                    message: 'Internal server error',
                    details: [],
                    timestamp: new Date().toISOString(),
                    path: e.response.config?.url || '',
                },
                request_id: 'unknown',
            });
        }
        return withError({
            status: 'error',
            status_code: 0,
            error: {
                error_code: ERROR_CODES.CONNECTION_ERROR,
                message:
                    'Unable to connect, Please check your internet connection.',
                details: [],
                timestamp: new Date().toISOString(),
                path: '',
            },
            request_id: 'unknown',
        });
    }
    return withUnknownError((e as Record<string, string>)?.message);
}
