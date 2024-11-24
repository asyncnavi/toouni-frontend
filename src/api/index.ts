export interface APIResponse<T = never> {
    status: string;
    statusCode: number;
    data: T;
    requestId: string;
}
