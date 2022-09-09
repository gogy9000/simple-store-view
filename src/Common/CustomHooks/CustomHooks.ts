import {AppDispatchType, AppRootStateType} from "../../BLL/Store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {contentSlice} from "../../BLL/Content/ContentSlice";


export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


const allActions = {
    ...contentSlice.actions
}
export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(allActions, dispatch)
}