import {ContentItemType} from "../../FireBase/FireBase";

export type SelectedProductType=ContentItemType&{
   numberOfProductUnits:number
}
export type InitialStateType={
    loadedContent: ContentItemType[],
    shoppingCart: SelectedProductType[],
    isLoadingContent:  "idle" | "loading" | "wrong",
    errorsList:{[id:string]:string}
}