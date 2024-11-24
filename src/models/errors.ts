export interface APIError {
    errorCode: string;
    message: string;
    details?: string | string[];
    timestamp: string;
    path: string;
}

export interface APIErrorResponse {
    status: string;
    statusCode: number;
    error: APIError;
    requestId: string;
}
