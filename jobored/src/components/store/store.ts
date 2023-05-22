import {configureStore} from "@reduxjs/toolkit";
import {jobApi} from "./job.api/jobApi";
import {vacanciesReducers} from "./slice/vacancySlice";
import {loadingReducer} from "./slice/loadingSlice";


export const store = configureStore({
    reducer:{
        [jobApi.reducerPath]:jobApi.reducer,
        vacancies:vacanciesReducers,
        loading:loadingReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(jobApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>