export interface Zone  {
    name : string,
    active : boolean,
    id : string
}
export interface ModePost {
    userId : string,
    name : string,
    zones: string[],
    createdAt: Date,
    creationDate: Date
}
export interface Status {
    activated: boolean,
    userId: string,
    lastUpdateDate: Date,
    modeId: string
}
export interface ModeGet {
    id :string,
    userId : string,
    name : string,
    zones: string[],
    createdAt: Date,
    creationDate: Date
}