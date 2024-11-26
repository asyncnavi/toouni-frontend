export const ERROR_CODES = {
    UNKNOWN: 'unknown',
    INTERNAL_SERVER_ERROR: 'internal_server_error',
    BAD_REQUEST: 'bad_request',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden',
    NOT_FOUND: 'not_found',
    VALIDATION_ERROR: 'validation_error',
    CONFLICT: 'conflict',
    TOO_MANY_REQUESTS: 'too_many_requests',
    SERVICE_UNAVAILABLE: 'service_unavailable',
    CONNECTION_ERROR: 'connection_error',
    TIMEOUT: 'timeout',
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
