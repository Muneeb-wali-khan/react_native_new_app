import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import { NEWS_API_KEY } from '../../strings/Keys';
const API_URL = 'https://newsapi.org/v2/'

const endpoints = {
  // All articles mentioning Apple from yesterday, sorted by popular publishers first
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=
  bussiness: `top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`,
  tesla: `everything?q=tesla&from=2024-11-09&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
  tech: `top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`,
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
    getNewsTesla: builder.query({
      query: () => ({
        url: endpoints.tesla,
        method: 'GET',
      }),
    }),
    getNewsTech: builder.query({
      query: () => ({
        url: endpoints.tech,
        method: 'GET',
      }),
    }),
  }),
});




export const {useGetNewsBussinessQuery, useGetNewsTeslaQuery,useGetNewsTechQuery} = NewsAPI;