import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const  loadingSlice = createSlice({
    name:'Loading',
    initialState:false,
    reducers:{
        loadingCheck:(state,action:PayloadAction<boolean>)=> {
            return action.payload
        }
    }
})

export const loadingReducer = loadingSlice.reducer
export const loadingAction = loadingSlice.actions