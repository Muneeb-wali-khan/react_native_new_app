import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
const NEWS_API_KEY = 'dffd4da287e848f291ab1037683112c9'
const API_URL = 'https://newsapi.org/v2/'

const endpoints = {
  // All articles mentioning Apple from yesterday, sorted by popular publishers first
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=
  bussiness: `top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`,
  tesla: `everything?q=tesla&from=2024-10-07&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
};

export const NewsAPI = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getNewsBussiness: builder.query({
      query: () => ({
        url: endpoints.bussiness,
        method: 'GET',
      }),
    }),
  }),
});




export const {useGetNewsBussinessQuery} = NewsAPI;