import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/comments",
        credentials: "include"
    }),
    tagTypes: ["Comment"],
    endpoints: (builder) => ({

    })
})