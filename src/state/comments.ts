import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Comment } from "../types/comments"

export interface CommentsState {
  comments: Comment[]
}

const initialState: CommentsState = {
  comments: [],
}

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload
    },
  },
})

export const { setComments } = commentSlice.actions
export default commentSlice.reducer
