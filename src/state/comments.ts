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
      const thread = action.payload.thread

      // check if comment exists
      const exists = state.comments[thread]?.includes(action.payload)
      if (exists) return

      // check if thread exists
      if (typeof state.comments[thread] === "undefined") {
        state.comments[thread] = [action.payload]
        return
      }

      const arr = state.comments[thread]
      if (!arr) return

      state.comments[thread] = [...arr, action.payload]
    },
  },
})

export const { setComments, saveComment } = commentSlice.actions
export default commentSlice.reducer
