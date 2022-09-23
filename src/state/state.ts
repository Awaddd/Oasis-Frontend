import { atom } from "recoil";
import { Thread } from "../utils/types/Comments";

export const sidebarIsOpenState = atom({
  key: "sidebarIsOpenState",
  default: false,
});

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
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
