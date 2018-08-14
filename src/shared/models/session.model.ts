export interface SessionModel {
    expires: Date;
    key: string;
    state: number;
}