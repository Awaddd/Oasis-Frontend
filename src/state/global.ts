import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface GlobalState {
  sidebarIsOpen: boolean
  selectedCategory: string
  currentArticle: string
  activeComment: string
}

const initialState: GlobalState = {
  sidebarIsOpen: false,
  selectedCategory: "",
  currentArticle: "",
  activeComment: "",
}

export const globalStateSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSidebarIsOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarIsOpen = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
    },
    setCurrentArticle: (state, action: PayloadAction<string>) => {
      state.currentArticle = action.payload
    },
    setActiveComment: (state, action: PayloadAction<string>) => {
      state.activeComment = action.payload
    },
  },
})

export const {} = globalStateSlice.actions
export default globalStateSlice.reducer
