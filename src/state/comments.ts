import { createSlice, current } from "@reduxjs/toolkit"
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
      const commentsState = current(state)

      const thread = action.payload.thread

      // check if comment exists
      const exists = state.comments[thread]?.includes(action.payload)
      if (exists) return

      // create new thread if it doesn't exist
      if (typeof state.comments[thread] === "undefined") {
        const comments: Thread = {}
        comments[thread] = [action.payload]
        // ensure new thread is the first property in state.comments
        // this ensures the new thread is shown at the top
        state.comments = { ...comments, ...commentsState.comments }
        return
      }

      const arr = state.comments[thread]
      if (!arr) return

      // assign to existing thread
      state.comments[thread] = [...arr, action.payload]
    },
  },
})

export const { setComments, saveComment } = commentSlice.actions
export default commentSlice.reducer
