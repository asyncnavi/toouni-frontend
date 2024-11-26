interface APIError {
    error_code: string;
    message: string;
    details: string | string[];
    timestamp: string;
    path: string;
}

export interface APIErrorResponse {
    status: string;
    status_code: number;
    error: APIError;
    request_id: string;
}
