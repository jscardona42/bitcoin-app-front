export interface Bitcoin {
    id: string;
    updated: Date;
    year?: string;
    month?: string;
    day?: string;
    bpi_usd: {
        code: string;
        rate: string;
    };
    bpi_euro: {
        code: string;
        rate: string;
    }
}