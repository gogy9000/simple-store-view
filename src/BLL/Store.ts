import {configureStore} from "@reduxjs/toolkit";
import {contentSlice} from "./Content/ContentSlice";

export const store=configureStore({
    reducer:{
    contentState:contentSlice.reducer
    },

})

export type AppRootStateType =ReturnType<typeof store.getState>
export type AppDispatchType=typeof store.dispatch