import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
}

const reducer = combineReducers({
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
