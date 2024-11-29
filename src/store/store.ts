import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './users/user.slice'
import { beerAPI } from './beer/beer.api'

//STATE
const rootReducer = combineReducers({
    userReducer,
    [beerAPI.reducerPath]:beerAPI.reducer
})
export type RootState = ReturnType<typeof rootReducer>

//CORE
export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools:true,
  middleware:(getDifaultMiddleware) => getDifaultMiddleware().concat(beerAPI.middleware)
})

//ACTION
export type appstore = ReturnType<typeof setupStore>
export type AppDispatch = appstore['dispatch']