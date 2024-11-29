import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const beerAPI = createApi({
    reducerPath: 'beerAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.punkapi.com/v2/' }),
    endpoints: (builder) => ({
        fetchBeers: builder.query<any, any>({
        query: ({page,per_page}) => ({
            url:'beers',
            params:{
                page,
                per_page
            }
        }),
      }),
      fetchBeer:builder.query<any, any>({
        query:(id:number) => ({
          url:  `beers/${id}`
        })
      })
    }),
  })

  export const {useFetchBeersQuery,useFetchBeerQuery} = beerAPI

// https://api.punkapi.com/v2/beers?page=2&per_page=80