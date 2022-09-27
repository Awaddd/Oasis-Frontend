import { atom } from "recoil";
import { Thread } from "../utils/types/Comments";
import { Notification } from "../utils/types/global";
import { Session } from "../utils/types/Users";

export const sidebarIsOpenState = atom({
  key: "sidebarIsOpenState",
  default: false,
});

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "",
});

export const ArticleState = atom({
  key: "articleState",
  default: "",
});

export const activeCommentState = atom({
  key: "activeCommentState",
  default: "",
});

export const CommentsState = atom<Thread[]>({
  key: "commentsState",
  default: [],
});

export const NotificationState = atom<Notification>({
  key: "notificationState",
  default: {
    message: "",
  },
});

export const userSessionState = atom<Session | null>({
  key: "userSessionState",
  default: null,
});
