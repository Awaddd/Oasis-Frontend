import { atom } from "recoil"
import { Thread } from "../utils/types/Comments"
import { Notification } from "../utils/types/global"
import { Session } from "../utils/types/Users"
import { recoilPersist } from 'recoil-persist'

export const sidebarIsOpenState = atom({
  key: "sidebarIsOpenState",
  default: false,
})

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "",
})

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

export const NotificationState = atom<Notification>({
  key: "notificationState",
  default: {
    message: "",
  },
})

const { persistAtom } = recoilPersist()

export const userSessionState = atom<Session | null>({
  key: "userSessionState",
  default: null,
  effects_UNSTABLE: [persistAtom],
})
