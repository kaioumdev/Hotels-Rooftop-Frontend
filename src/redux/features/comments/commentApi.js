import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/comments",
        credentials: "include"
    }),
    tagTypes: ["Comments"],
    endpoints: (builder) => ({
        postComment: builder.mutation({
            query: (commentData) => ({
                url: "/post-comment",
                method: "POST",
                body: commentData
            }),
            invalidatesTags: (result, error, postId) => [{ type: 'Comments', id: postId }]
        }),

    })
})