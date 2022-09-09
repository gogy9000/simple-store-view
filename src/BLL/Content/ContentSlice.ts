import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ContentItemType, getStaff} from "../../FireBase/FireBase";

const getContent = createAsyncThunk("getContent", async (arg, thunkAPI) => {
    try {
        const response = await getStaff()
        if (response.resultCode === 0) {
            return response.data
        } else {
            return thunkAPI.rejectWithValue({error: "no such content"})
        }
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue({error: "some Error"})
    }
})
export const thunks = {getContent}

export const contentSlice = createSlice({
    name: "contentSlice",
    initialState: {
        content: [] as ContentItemType[],
        isLoadingContent:"idle" as "idle"|"loading"|"wrong"
    },
    reducers: {

    },
    extraReducers: (builder => {
        builder
            .addCase(getContent.pending, (state, action) => {
                state.isLoadingContent="loading"
            })
            .addCase(getContent.fulfilled, (state, action) => {
                if(action.payload){
                    state.content=action.payload.content
                    state.isLoadingContent="idle"
                }
            })
            .addCase(getContent.rejected, (state, action) => {
                state.isLoadingContent="wrong"
            })
    })
})