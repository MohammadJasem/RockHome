export interface PropertyModelServer{
    id: Number
}

export interface ServerResponse{
    properties: PropertyModelServer[],
    count: Number
}