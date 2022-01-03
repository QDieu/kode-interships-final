export type TServices = {
    service_id : string,
    service_name : string,
    service_icon : string,
}

export type TCategory = {
    category_id : string,
    category_name : string,
    category_icon : string,
    services : Array<TServices>
}

export type TInitialState = {
    category : Array<TCategory>
    expireAt? : number;
}