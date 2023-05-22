import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Vacancy} from "../../../types/types";


const initialState:Vacancy[] = []


export const vacanciesSlice = createSlice({
    name:'Vacancies',
    initialState,
    reducers: {
        changeVacancies: (state,action:PayloadAction<Vacancy[]>) => {
            return [...action.payload]
        }
    }
})

export const vacanciesReducers = vacanciesSlice.reducer
export const vacanciesActions = vacanciesSlice.actions

