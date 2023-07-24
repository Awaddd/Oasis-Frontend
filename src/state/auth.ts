import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { User } from "../types/users"
import { Admin, Record } from "pocketbase"
import { userMapper } from "../network/user-mapper"

export interface AuthState {
  user: User | null
  auth: Record | Admin | null
}

const initialState: AuthState = {
  user: null,
  auth: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<Record>) => {
      state.user = userMapper(action.payload)
      state.auth = action.payload
    },
    logout: (state) => {
      ;(state.user = null), (state.auth = null)
    },
  },
})

export const { setCurrentUser, logout } = authSlice.actions
export default authSlice.reducer
