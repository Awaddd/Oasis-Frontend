import { atom } from "recoil"
import { Thread } from "../utils/types/comments"
import { User } from "../utils/types/users"
import { recoilPersist } from "recoil-persist"

export const ArticleState = atom({
  key: "articleState",
  default: "",
})

export const activeCommentState = atom({
  key: "activeCommentState",
  default: "",
})

export const CommentsState = atom<Thread[]>({
  key: "commentsState",
  default: [],
})

const { persistAtom } = recoilPersist()

export const currentUserState = atom<User | null>({
  key: "currentUserState",
  default: null,
  effects_UNSTABLE: [persistAtom],
})
