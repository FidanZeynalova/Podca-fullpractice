import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { podcaApi } from './Slices/Slice'

export const store = configureStore({
  reducer: {
    [podcaApi.reducerPath]: podcaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcaApi.middleware),
})

setupListeners(store.dispatch)