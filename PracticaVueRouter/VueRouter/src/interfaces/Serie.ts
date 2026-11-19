export interface Serie{
    id: number;
    name: string;
    genres: string[];
    status: string;
    rating: {
        average: number | null;
    };
    image: {
        medium: string;
        original: string;
    }

}