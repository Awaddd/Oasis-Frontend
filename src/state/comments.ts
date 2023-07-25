import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Comment, Thread } from "../types/comments"

export interface CommentsState {
  comments: Thread
}

const initialState: CommentsState = {
  comments: {},
}

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Thread>) => {
      state.comments = action.payload
    },
    saveComment: (state, action: PayloadAction<Comment>) => {
      // const exists = state.comments[action.payload.thread].includes(action.payload)
      // if (exists) return
      // state.comments = [...state.comments, action.payload]
    },
  },
})

export const { setComments, saveComment } = commentSlice.actions
export default commentSlice.reducer
