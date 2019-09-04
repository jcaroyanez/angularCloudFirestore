export interface Country{
    id: string;
    name: string;
    neighborhood?: Neighborhood[]
}

export interface Neighborhood{
    id: string;
    name: string;
}