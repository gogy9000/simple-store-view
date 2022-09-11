import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ContentItemType, getStaff} from "../../FireBase/FireBase";
import {InitialStateType, SelectedProductType} from "./types";

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
        loadedContent: [],
        shoppingCart: [],
        isLoadingContent: "idle",
        errorsList: {}
    } as InitialStateType,
    reducers: {
        addProductToCart: (state, action: PayloadAction<{ id: string }>) => {
            const selectedProduct = state.loadedContent.find(item => item.id === action.payload.id)
            if (selectedProduct) {
                state.shoppingCart.push({...selectedProduct, numberOfProductUnits: 1})
            } else {
                state.errorsList = {...state.errorsList, [action.payload.id]: "no such product"}
            }
        },
        removeProductToCart: (state, action: PayloadAction<{ id: string }>) => {
            state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload.id)
        },
        addUnitOfProduct: (state, action: PayloadAction<{ id: string }>) => {
            state.shoppingCart.forEach(item => {
                if (item.id === action.payload.id) {
                    item.numberOfProductUnits += 1
                }
            })
        },
        removeUnitOfProduct: (state, action: PayloadAction<{ id: string }>) => {
            state.shoppingCart.forEach(item => {
                if (item.id === action.payload.id) {
                    item.numberOfProductUnits -= 1
                    if (item.numberOfProductUnits === 0) {
                        state.shoppingCart=state.shoppingCart.filter(item => item.id !== action.payload.id)
                    }
                }
            })

        }

    },
    extraReducers: (builder => {
        builder
            .addCase(getContent.pending, (state, action) => {
                state.isLoadingContent = "loading"
            })
            .addCase(getContent.fulfilled, (state, action) => {
                if (action.payload) {
                    state.loadedContent = action.payload.content
                    state.isLoadingContent = "idle"
                }
            })
            .addCase(getContent.rejected, (state, action) => {
                state.isLoadingContent = "wrong"
            })
    })
})