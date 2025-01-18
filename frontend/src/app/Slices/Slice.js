
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const podcaApi = createApi({
    reducerPath: 'podcaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6060/' }),
    endpoints: (builder) => ({
        getDatas: builder.query({
            query: () => `podca/`,
        }),
        getData: builder.query({
            query: (id) => `podca/${id}`,
        }),
        postData: builder.mutation({
            query: (newData) => ({
                url: `podca/`,
                method: "POST",
                body: newData,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `podca/${id}`,
                method: "DELETE"
            })
        }),
    }),
})

export const { useGetDatasQuery,useDeleteDataMutation,useGetDataQuery,usePostDataMutation } = podcaApi