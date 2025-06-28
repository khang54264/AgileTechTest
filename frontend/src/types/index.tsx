export interface ExampleType {
    id: number;
    name: string;
    description?: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}