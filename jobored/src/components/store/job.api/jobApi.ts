import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {RootData} from "../../../types/types";


export const jobApi = createApi({
    reducerPath: 'api/jobs',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://startup-summer-proxy-production.up.railway.app/2.0/',
        prepareHeaders: (headers) => {
            headers.set('x-secret-key', 'GEU4nvd3rej*jeh.eqp');
            headers.set('X-Api-App-Id', 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948');
            return headers;
        },
    }),
    endpoints:(build) => ({
        getAllVacancies: build.query<RootData,any>({
            query:() => `/vacancies/?published=1`,
        }),
        getVacanciesByKeyword: build.query<RootData,string>({
            query:(keyword) => `/vacancies/?published=1&keyword=${keyword}`
        }),
        getVacanciesByFilter: build.query<RootData,[string | null,number | string,number | string]>({
            query:([catalogues=0,paymentFrom=0, paymentTo=0]) =>`/vacancies/?published=1&catalogues=${catalogues}&payment_from=${paymentFrom}&payment_to=${paymentTo}`

        }),
    })

});

export const {
    useGetAllVacanciesQuery,
    useLazyGetAllVacanciesQuery,
    useLazyGetVacanciesByKeywordQuery,
    useLazyGetVacanciesByFilterQuery,
} = jobApi
