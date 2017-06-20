export interface Microfilm {
    roll_no: string; // no of the microfilm roll
    location: string; // stored in JYU library or where
    newspapers: Newspaper[]; // A microfilm can have one or more newspapers records
}

export interface Newspaper {
    name: string;
    date_from: Date;
    date_to: Date;
}