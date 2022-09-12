import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {contentSlice} from "./Content/ContentSlice";
import {loadState, saveState} from "../Utils/Local-storage-utils";

const preloadedState  = loadState()

let rootReducer = combineReducers({
    contentState:contentSlice.reducer
})

export const store=configureStore({
    reducer:rootReducer,
    preloadedState
})

export type AppRootStateType =ReturnType<typeof store.getState>
export type AppDispatchType=typeof store.dispatch

store.subscribe(() => {
    saveState(store.getState())
})