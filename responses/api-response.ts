export interface ApiResponse {
    statusCode: number;
    headers?: {[key: string]: string | boolean | number};
    body?: string;
    isBase64Encoded?: boolean;
}
